import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { WeatherProps } from '../containers/WeatherContainer';
import { WeatherAppContent } from '../shared/WeatherAppContent';
import { WeatherAppCard } from '../shared/WeatherAppCard';

export const WeatherScreen: React.FC<WeatherProps> = ({ weather, isGettingWeather }) => {
  return (
    <WeatherAppContent>
      <View style={styles.titleContainer}>
        <Text style={styles.greeting}>Good day!</Text>
        <Text style={styles.title}>Weather Today</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
          <WeatherAppCard title={'Latitude'} value={123} />
          <WeatherAppCard title={'Latitude'} value={23} isLast={true} />
        </ScrollView>
      </View>
    </WeatherAppContent>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 16,
  },
  greeting: {
    fontSize: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    flex: 8,
    marginHorizontal: -16,
  },
  scrollView: {
    paddingTop: 28,
    paddingBottom: 28,
  },
});
