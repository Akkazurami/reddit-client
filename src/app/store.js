import { configureStore } from '@reduxjs/toolkit';

import searchTermReducer from '../features/searchbar/searchBarSlice.js';
import categoriesReducer from '../features/categories/categoriesSlice.js';
import articlesReducer from '../features/articlelist/articlesSlice.js';
import commentsReducer from '../features/commentlist/commentsSlice.js';


export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    category: categoriesReducer,
    articles: articlesReducer,
    comments: commentsReducer
  }
});
