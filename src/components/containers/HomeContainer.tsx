import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import * as Location from 'expo-location';

import { usersSlice, User } from '../../slices/users-slice';
import { Environment } from '../../Environment';
import { RootState } from '../../store';

const { storeUserInfo, storeLocation } = usersSlice.actions;

export interface HomeProps {
  // Outputs
  /** Whether the user is currently getting user info. */
  isGettingInfo: boolean;
  /** Whether the user is currently getting location. */
  isGettingLocation: boolean;
  /** Authenticated user */
  user: User;
  /** Location of user */
  location: { lat: number; long: number };

  // Inputs
  /** Call when the user taps the 'Get location' button. */
  userTappedGetLocation: () => void;
}

// NOTE that this HOC accepts ANY component fulfilling the prop contract.
export const homeContainer = (Screen: React.ComponentType<HomeProps>) => () => {
  const dispatch = useDispatch();
  const { user, location } = useSelector((state: RootState) => state.users);

  const [isGettingInfo, setGettingInfo] = useState(false);
  const [isGettingLocation, setGettingLocation] = useState(false);

  const { services } = Environment.current();

  // Get user information
  React.useEffect(() => {
    const getInfo = async () => {
      setGettingInfo(true);
      try {
        const userInfo: User = await services.management.getUserInfo();

        dispatch(storeUserInfo({ userInfo }));
      } catch (e) {
        Alert.alert('Failed to get user info!');
      }
      setGettingInfo(false);
    };

    getInfo();
  }, []);

  return (
    <Screen
      isGettingInfo={isGettingInfo}
      isGettingLocation={isGettingLocation}
      user={user}
      location={location}
      userTappedGetLocation={async () => {
        setGettingInfo(true);
        try {
          const loc = await services.location.getLocation();
          console.log('loc --', location);
          dispatch(storeLocation({ location: loc }));
        } catch (e) {
          Alert.alert('Failed to get location!');
        }
        setGettingInfo(false);
      }}
    />
  );
};
