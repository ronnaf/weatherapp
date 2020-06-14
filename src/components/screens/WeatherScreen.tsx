import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';

import { WeatherProps } from '../containers/WeatherContainer';
import { WeatherAppContent } from '../shared/WeatherAppContent';
import { WeatherAppCard } from '../shared/WeatherAppCard';
import { WeatherAppSpinner } from '../shared/WeatherAppSpinner';

export const WeatherScreen: React.FC<WeatherProps> = ({ weather, isGettingWeather }) => {
  const getFormattedDate = () => {
    // move to utils
    const dateNow = new Date();
    return `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()}`;
  };

  return (
    <WeatherAppContent>
      <View style={styles.titleContainer}>
        <Text style={styles.greeting}>How's your day?</Text>
        <Text style={styles.title}>Weather Today</Text>
      </View>

      {isGettingWeather && <WeatherAppSpinner size="small" />}

      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
          {width > 375 ? (
            // larger screens
            <>
              <WeatherAppCard title={'Date'} value={getFormattedDate()} isFirst />
              <WeatherAppCard title={'Temperature'} value={`${weather.temp} ℉`} />
              <WeatherAppCard title={'Description'} value={weather.desc} />
              <WeatherAppCard title={'Main'} value={weather.main} />
              <WeatherAppCard title={'Pressure'} value={weather.pressure} />
              <WeatherAppCard title={'Humidity'} value={weather.humidity} />
            </>
          ) : (
            // smaller
            <>
              <WeatherAppCard title={'Date'} value={getFormattedDate()} isFirst />
              <WeatherAppCard title={'Temperature'} value={`${weather.temp} ℉`} />
            </>
          )}
        </ScrollView>
      </View>

      {/* for spacing purposes only */}
      <View style={{ flex: 10 }} />
    </WeatherAppContent>
  );
};

const { width } = Dimensions.get('window');
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
    flex: 6,
    marginHorizontal: -16,
  },
  scrollView: {
    paddingTop: 28,
    paddingBottom: 28,
  },
});
