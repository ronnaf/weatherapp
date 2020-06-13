import { configureStore } from '@reduxjs/toolkit';

import { usersSlice } from './slices/users-slice';

export const store = configureStore({
  reducer: {
    /** your app’s top-level reducers */
    users: usersSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
