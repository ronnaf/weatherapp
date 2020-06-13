import { configureStore } from '@reduxjs/toolkit';

import { samplesSlice } from './slices/sample-slice';

export const store = configureStore({
  reducer: {
    /* your app’s top-level reducers */
    sample: samplesSlice.reducer,
  },
});
