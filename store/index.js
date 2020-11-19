import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export function initializeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
