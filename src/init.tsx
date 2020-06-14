import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { createWeatherAppNavigator } from './Navigator';
import { Environment } from './Environment';
import { Auth0AuthenticationService } from './services/AuthenticationService';
import { Auth0ManagementService } from './services/ManagementService';
import { AsyncStorageService } from './services/AsyncStorageService';
import { ExpoLocationService } from './services/LocationService';
import { OpenWeatherService } from './services/WeatherService';

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
      authentication: Auth0AuthenticationService,
      management: Auth0ManagementService,
      storage: AsyncStorageService,
      location: ExpoLocationService,
      weather: OpenWeatherService,
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
