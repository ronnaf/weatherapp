import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export type User = {
  name: string;
  nickname: string;
  email: string;
  picture?: string;
};
export type Weather = {
  temp: number;
  desc: string;
  main: string;
  pressure: number;
  humidity: number;
};
type SliceState = {
  isAuthenticated: boolean;
  user: User;
  location: { lat: number; long: number };
  weather: Weather;
};

const initialState: SliceState = {
  isAuthenticated: false,
  user: { name: '', nickname: '', email: '' },
  location: { lat: 0, long: 0 },
  weather: { temp: 0, desc: '', main: '', pressure: 0, humidity: 0 },
};

// usage: import { actions, reducer } from sampleSlice
export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    authenticateUser(state) {
      state.isAuthenticated = true;
    },
    storeUserInfo(state, actions: PayloadAction<{ userInfo: User }>) {
      state.user = actions.payload.userInfo;
    },
    storeLocation(state, actions: PayloadAction<{ location: { lat: number; long: number } }>) {
      state.location = actions.payload.location;
    },
    storeWeather(state, actions: PayloadAction<{ weather: Weather }>) {
      state.weather = actions.payload.weather;
    },
  },
});
