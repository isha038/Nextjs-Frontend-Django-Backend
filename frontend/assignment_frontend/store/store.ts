import { configureStore } from '@reduxjs/toolkit';
import chartReducer from '../features/chartSlice';

const store = configureStore({
  reducer: {
    charts: chartReducer,
  },
});
// Export the store
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
