import React from 'react';
import { StyleSheet, View, Text, Linking, ActivityIndicator, ScrollView } from 'react-native';

import { HomeProps } from '../containers/HomeContainer';
import { WeatherAppContent } from '../shared/WeatherAppContent';
import { WeatherAppButton } from '../shared/WeatherAppButton';
import { WeatherAppCard } from '../shared/WeatherAppCard';
import { WeatherAppSpinner } from '../shared/WeatherAppSpinner';

export const HomeScreen: React.FC<HomeProps> = ({
  isGettingInfo,
  isGettingLocation,
  user,
  location,
  userTappedGetLocation,
}) => {
  return (
    <WeatherAppContent>
      <View style={styles.titleContainer}>
        {isGettingInfo ? (
          <WeatherAppSpinner title={'Getting your information'} />
        ) : (
          <>
            <Text style={styles.greeting}>Good day!</Text>
            <Text style={styles.title}>{user.name}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>
              https://github.com/{user.nickname}
            </Text>
          </>
        )}
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
          <WeatherAppCard title={'Latitude'} value={location.lat} />
          <WeatherAppCard title={'Latitude'} value={location.long} isLast={true} />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <WeatherAppButton loading={isGettingLocation} onPress={userTappedGetLocation}>
          Get Location
        </WeatherAppButton>
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
  link: {
    color: 'blue',
    fontSize: 18,
    marginTop: 6,
  },
  scrollViewContainer: {
    flex: 8,
    marginHorizontal: -16,
  },
  scrollView: {
    paddingTop: 28,
    paddingBottom: 28,
  },
  buttonContainer: {
    flex: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
});
