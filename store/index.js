import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules';

export function initializeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
