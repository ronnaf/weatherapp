import React, { useState } from 'react';

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
  // "Business logic" goes here.
  // - Maybe call `useSelector(...)` and/or `useDispatch()` to grab values from the Redux store.

  const [isSigningIn, setSigningIn] = useState(false);

  return (
    <Screen
      isSigningIn={isSigningIn}
      signInButtonEnabled={true}
      userTappedSignIn={async () => {
        // implement sign in
      }}
    />
  );
};
