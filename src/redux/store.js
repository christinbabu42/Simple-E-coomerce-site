import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice.js';

const store = configureStore({
  reducer: {
    products: productsReducer, // Add the products reducer
  },
});

export default store;
