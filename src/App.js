import React from 'react';
import Header from './components/header/Header.js';
import { ArticleList } from './features/articlelist/ArticleList.js';
import Categories from './features/categories/Categories.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
          <Categories />
          <ArticleList />
        </main>
    </div>
  );
}

export default App;
