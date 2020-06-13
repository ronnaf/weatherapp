import React from 'react';
import { StyleSheet, View, Text, Linking, ActivityIndicator, ScrollView } from 'react-native';

import { HomeProps } from '../containers/HomeContainer';
import { WeatherAppContent } from '../shared/WeatherAppContent';
import { WeatherAppButton } from '../shared/WeatherAppButton';
import { WeatherAppCard } from '../shared/WeatherAppCard';

export const HomeScreen: React.FC<HomeProps> = ({ isGettingInfo, user }) => {
  return (
    <WeatherAppContent>
      <View style={styles.titleContainer}>
        {isGettingInfo ? (
          // could be separated into a WeatherApp component
          <View style={styles.loadingContainer}>
            <ActivityIndicator style={{ marginBottom: 16 }} size="large" />
            <Text>Getting your information</Text>
          </View>
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
          {/* could be WeatherAppCard */}
          <WeatherAppCard title={'Latitude'} value={'47.159401'} />
          <WeatherAppCard title={'Latitude'} value={'34.330502'} isLast={true} />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <WeatherAppButton>Get Location</WeatherAppButton>
      </View>
    </WeatherAppContent>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 16,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
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
  buttonContainer: {
    flex: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
});
