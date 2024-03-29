import React from 'react';
import { useSelector } from 'react-redux';

import './ArticleList.css';

import Article from '../../components/article/Article';

import { selectArticles } from './articlesSlice';
import Categories from '../categories/Categories';

export function ArticleList() {
    const articles = useSelector(selectArticles);

    return (
    <main>
        <Categories />
        <section className='article-list'>
            {articles.map(article => {
                return <Article article={article} />
            })}
        </section>
    </main>
        
    )
}