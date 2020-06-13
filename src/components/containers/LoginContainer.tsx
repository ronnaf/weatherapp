import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import { usersSlice } from '../../slices/users-slice';
import { Environment } from '../../Environment';

const { authenticateUser } = usersSlice.actions;

export interface LoginProps {
  // Outputs
  /** Whether the user is currently being signed in. */
  isSigningIn: boolean;
  /** Whether the 'Sign In' button should be enabled. */
  signInButtonEnabled: boolean;

  // Inputs
  /** Call when the user taps the 'Sign In' button. */
  userTappedSignIn: () => void;
}

// NOTE that this HOC accepts ANY component fulfilling the prop contract.
export const loginContainer = (Screen: React.ComponentType<LoginProps>) => () => {
  const dispatch = useDispatch();

  const [isSigningIn, setSigningIn] = useState(false);

  const { services } = Environment.current();
  const { authentication } = services;

  return (
    <Screen
      isSigningIn={isSigningIn}
      signInButtonEnabled={true}
      userTappedSignIn={async () => {
        setSigningIn(true);
        try {
          const accessToken = await authentication.loginWithGithub();
          dispatch(authenticateUser({ accessToken }));
        } catch (e) {
          Alert.alert('Login unsuccessful!');
        }
        setSigningIn(false);
      }}
    />
  );
};
