import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type WeatherAppCardProps = {
  title: string;
  value: string;
  isLast?: boolean;
};

export const WeatherAppCard: React.FC<WeatherAppCardProps> = ({ title, value, isLast = false }) => {
  return (
    <View style={[styles.locCard, isLast ? styles.locCardLast : styles.locCardMiddle]}>
      <Text style={{ marginBottom: 8, textTransform: 'uppercase' }}>{title}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 26 }}>{value}</Text>
      <View style={{ position: 'absolute', bottom: 16, left: 16 }}>
        <Text style={{ color: '#D6D5D5' }}>(bg graphics here)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locCard: {
    padding: 18,
    backgroundColor: 'white',
    width: 212,
    borderRadius: 16,
    shadowColor: '#D6D5D5',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  locCardMiddle: {
    marginHorizontal: 18,
  },
  locCardLast: {
    marginRight: 18,
  },
});
