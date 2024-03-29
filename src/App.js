import React from 'react';
import Header from './components/header/Header.js';
import { ArticleList } from './features/articlelist/ArticleList.js';
import Categories from './features/categories/Categories.js';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Outlet />
    </div>
  );
}

export default App;
