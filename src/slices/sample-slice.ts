import { createSlice } from '@reduxjs/toolkit';

// usage: import { actions, reducer } from sampleSlice
export const samplesSlice = createSlice({
  name: 'samples',
  initialState: {
    greeting: 'Hello, from the store!',
  },
  reducers: {
    createSample(state, action) {},
    updateSample(state, action) {
      state.greeting = action.payload.greeting;
    },
    deleteSample(state, action) {},
  },
});
