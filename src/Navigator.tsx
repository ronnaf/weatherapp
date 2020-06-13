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
import { Text, View } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

/**
 * native imports
 * ex.
 * import { loginContainer } from './components/containers/LoginContainer';
 * import { LoginScreen } from './components/screens/LoginScreen';
 */

/**
 * connected components
 * ex. const Login = loginContainer(LoginScreen);
 */

/**
 * temporary placeholder components
 */
const SampleComponent = () => {
  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );
};

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
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={SampleComponent} />
        <Drawer.Screen name="Article" component={SampleComponent} />
      </Drawer.Navigator>
    );
  };

  return {
    Navigator: () => (
      <NavigationContainer ref={ref => (navigatorRef = ref)}>
        <Stack.Navigator>
          <Stack.Screen name={'Login'} component={SampleComponent} />
          <Stack.Screen name={'Home'} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    ),
    navigate: (route, params) => {
      navigatorRef?.navigate(route, params);
    },
  };
};
