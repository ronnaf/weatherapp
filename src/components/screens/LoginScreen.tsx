import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { LoginProps } from '../containers/LoginContainer';
import { WeatherAppContent } from '../shared/WeatherAppContent';
import { WeatherAppButton } from '../shared/WeatherAppButton';

export const LoginScreen: React.FC<LoginProps> = ({ isSigningIn, signInButtonEnabled, userTappedSignIn }) => {
  return (
    <WeatherAppContent>
      <View style={styles.titleContainer}>
        <View style={styles.logo} />
        <Text style={styles.title}>WeatherApp</Text>
        <Text style={styles.subtitle}>Log in to continue</Text>
      </View>
      <View style={styles.buttonContainer}>
        <WeatherAppButton>Login with Github</WeatherAppButton>
      </View>
    </WeatherAppContent>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
    paddingTop: 120,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 12,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
});
