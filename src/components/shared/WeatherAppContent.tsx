import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export const WeatherAppContent: React.FC = ({ children }) => {
  return <SafeAreaView style={styles.paddedSafeArea}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  paddedSafeArea: {
    flex: 1,
    margin: 16,
  },
});
