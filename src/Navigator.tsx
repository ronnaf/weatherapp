/**
 * Ideally, we should contain as much as possible of the `react-navigation`-specific
 * code into this file.
 *
 * This file will likely grow to be rather large--that is intentional, so that we can contain
 * & minimize the dependency 'bleed'.
 *
 * The `createNavigator` function below should grow in length as more screens are added.
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

/**
 * native imports
 */
import { RootState } from './store';
import { loginContainer } from './components/containers/LoginContainer';
import { LoginScreen } from './components/screens/LoginScreen';
import { homeContainer } from './components/containers/HomeContainer';
import { HomeScreen } from './components/screens/HomeScreen';
import { weatherContainer } from './components/containers/WeatherContainer';
import { WeatherScreen } from './components/screens/WeatherScreen';

/**
 * connected components
 */
const Login = loginContainer(LoginScreen);
const Home = homeContainer(HomeScreen);
const Weather = weatherContainer(WeatherScreen);

/**
 * Creates the WeatherApp root navigator component, as well as a function for
 * performing navigation at any time.
 */
export const createWeatherAppNavigator = (): {
  Navigator: React.ComponentType;
  navigate: (route: string, params?: { [key: string]: any }) => void;
} => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  let navigatorRef: NavigationContainerRef | null = null;

  const HomeScreen = () => {
    return (
      <Drawer.Navigator openByDefault={true} initialRouteName="Github">
        <Drawer.Screen name="Location" component={Home} />
        <Drawer.Screen name="Weather" component={Weather} />
      </Drawer.Navigator>
    );
  };

  return {
    Navigator: () => {
      const { isAuthenticated } = useSelector((state: RootState) => state.users);
      return (
        <NavigationContainer ref={ref => (navigatorRef = ref)}>
          <Stack.Navigator headerMode="none">
            {isAuthenticated ? (
              <Stack.Screen name={'Home'} component={HomeScreen} />
            ) : (
              <Stack.Screen name={'Login'} component={Login} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      );
    },
    navigate: (route, params) => {
      navigatorRef?.navigate(route, params);
    },
  };
};
