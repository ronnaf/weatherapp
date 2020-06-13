import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

type SliceState = {
  isAuthenticated: boolean;
  accessToken: string | null;
};

const initialState: SliceState = {
  isAuthenticated: false,
  accessToken: null,
};

// usage: import { actions, reducer } from sampleSlice
export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    authenticateUser(state, action: PayloadAction<{ accessToken: string }>) {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
    },
  },
});
