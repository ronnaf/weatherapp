import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { usersSlice, Weather } from '../../slices/users-slice';
import { Environment } from '../../Environment';
import { RootState } from '../../store';

const { storeWeather } = usersSlice.actions;

export interface WeatherProps {
  // Outputs
  /** Whether the user is currently getting user info. */
  isGettingWeather: boolean;
  /** Authenticated user */
  weather: Weather;
}

// NOTE that this HOC accepts ANY component fulfilling the prop contract.
export const weatherContainer = (Screen: React.ComponentType<WeatherProps>) => () => {
  const dispatch = useDispatch();
  const { weather, location } = useSelector((state: RootState) => state.users);

  const [isGettingWeather, setGettingWeather] = useState(false);

  const { services } = Environment.current();

  React.useEffect(() => {
    const getWeather = async () => {
      setGettingWeather(true);
      try {
        const { lat, long } = location;
        const weather = await services.weather.getWeather(lat, long);
        dispatch(storeWeather({ weather }));
      } catch (e) {
        Alert.alert(e.message || 'Failed to get weather!');
      }
      setGettingWeather(false);
    };

    getWeather();
  }, [location.lat, location.long]);

  return <Screen isGettingWeather={isGettingWeather} weather={weather} />;
};
