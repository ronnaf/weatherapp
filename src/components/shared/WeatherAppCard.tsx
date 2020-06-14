import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type WeatherAppCardProps = {
  title: string;
  value: number;
  isLast?: boolean;
};

export const WeatherAppCard: React.FC<WeatherAppCardProps> = ({ title, value, isLast = false }) => {
  return (
    <View style={[styles.locCard, isLast ? styles.locCardLast : styles.locCardMiddle]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.phContainer}>
        <Text style={styles.phText}>(bg graphics here)</Text>
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
  title: {
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  phContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  phText: {
    color: '#D6D5D5',
  },
});
