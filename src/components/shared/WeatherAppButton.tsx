import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

type WeatherAppButtonProps = {};

export const WeatherAppButton: React.FC<WeatherAppButtonProps> = ({ children }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4DFFEF',
    padding: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
