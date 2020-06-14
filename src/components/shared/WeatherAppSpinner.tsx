import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';

type WeatherAppSpinnerProps = {
  title?: string;
  size?: number | 'small' | 'large';
};

export const WeatherAppSpinner: React.FC<WeatherAppSpinnerProps> = ({ title, size = 'large' }) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={size} />
      {title && <Text style={styles.text}>{title}</Text>}
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
  text: {
    marginBottom: 16,
  },
});
