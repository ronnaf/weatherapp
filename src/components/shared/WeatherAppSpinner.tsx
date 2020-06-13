import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';

type WeatherAppSpinnerProps = {
  title?: string;
};

export const WeatherAppSpinner: React.FC<WeatherAppSpinnerProps> = ({ title = 'Loading' }) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator style={styles.spinner} size="large" />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  spinner: {
    marginBottom: 16,
  },
});
