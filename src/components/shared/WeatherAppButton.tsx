import React from 'react';
import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent, ActivityIndicator } from 'react-native';

type WeatherAppButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
};

export const WeatherAppButton: React.FC<WeatherAppButtonProps> = ({ children, onPress, loading }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {loading ? <ActivityIndicator /> : <Text style={styles.text}>{children}</Text>}
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
