import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/error-pages/not-found/not-found';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ArticleList } from './features/articlelist/ArticleList';
import Article from './components/article/Article.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ArticleList />
      },
      {
        path: "category/:category",
        element: <ArticleList />
      },
      {
        path: "article/:articleId",
        element: <Article />
      }
    ]
  }
])

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();