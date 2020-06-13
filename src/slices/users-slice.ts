import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export type User = {
  name: string;
  nickname: string;
  email: string;
  picture?: string;
};

type SliceState = {
  isAuthenticated: boolean;
  user: User;
};

const initialState: SliceState = {
  isAuthenticated: false,
  user: {
    name: '',
    nickname: '',
    email: '',
  },
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
  },
});
