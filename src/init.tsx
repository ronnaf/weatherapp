import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

import { Environment } from './Environment';
import { createWeatherAppNavigator } from './Navigator';
import { store } from './store';

export const init = () => {
  // 1. Set the Environment.

  // This is the navigate function that will be called through `Environment`.
  // When we create the Navigator component below, we'll assign a value to this.
  let navigateFunction: (route: string, params?: { [key: string]: any }) => void;

  Environment.set({
    navigation: {
      navigate: (route, params) => {
        navigateFunction(route, params);
      },
    },
    services: {
      authentication: {},
    },
  });

  // 2. Create the root navigator and navigate function, and assign it above.
  const { Navigator, navigate } = createWeatherAppNavigator();
  navigateFunction = navigate;

  const Root = () => {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  };

  // 3. Register the root component.
  registerRootComponent(Root);
};
