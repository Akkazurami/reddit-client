import { configureStore } from '@reduxjs/toolkit';

import searchTermReducer from '../features/searchbar/searchBarSlice.js';
import categoriesReducer from '../features/categories/categoriesSlice.js';


export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    category: categoriesReducer
  }
});
