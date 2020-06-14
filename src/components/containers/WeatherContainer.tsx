import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { usersSlice, User } from '../../slices/users-slice';
import { Environment } from '../../Environment';
import { RootState } from '../../store';

const { storeUserInfo } = usersSlice.actions;

export interface WeatherProps {
  // Outputs
  /** Whether the user is currently getting user info. */
  isGettingWeather: boolean;
  /** Authenticated user */
  weather: {};
}

// NOTE that this HOC accepts ANY component fulfilling the prop contract.
export const weatherContainer = (Screen: React.ComponentType<WeatherProps>) => () => {
  const dispatch = useDispatch();
  const { weather, location } = useSelector((state: RootState) => state.users);

  const [isGettingWeather, setGettingWeather] = useState(false);

  const { services } = Environment.current();
  const { management } = services;

  React.useEffect(() => {
    const getWeather = async () => {
      setGettingWeather(true);
      // implement get weather
      setGettingWeather(false);
    };

    getWeather();
  }, [location.lat, location.long]);

  return <Screen isGettingWeather={isGettingWeather} weather={weather} />;
};
