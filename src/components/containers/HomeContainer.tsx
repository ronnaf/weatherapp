import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { usersSlice, User } from '../../slices/users-slice';
import { Environment } from '../../Environment';
import { RootState } from '../../store';

const { storeUserInfo } = usersSlice.actions;

export interface HomeProps {
  // Outputs
  /** Whether the user is currently getting user info. */
  isGettingInfo: boolean;

  // Inputs
  /** Authenticated user */
  user: User;
}

// NOTE that this HOC accepts ANY component fulfilling the prop contract.
export const homeContainer = (Screen: React.ComponentType<HomeProps>) => () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.users);

  const [isGettingInfo, setGettingInfo] = useState(false);

  const { services } = Environment.current();
  const { management } = services;

  React.useEffect(() => {
    const getInfo = async () => {
      setGettingInfo(true);
      try {
        const userInfo: User = await management.getUserInfo();
        dispatch(storeUserInfo({ userInfo }));
      } catch (e) {
        Alert.alert('Failed to get user info!');
      }
      setGettingInfo(false);
    };

    getInfo();
  }, []);

  return <Screen isGettingInfo={isGettingInfo} user={user} />;
};
