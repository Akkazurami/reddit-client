import { configureStore } from '@reduxjs/toolkit';

import searchTermReducer from '../features/searchbar/searchBarSlice.js';


export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer
  }
});
