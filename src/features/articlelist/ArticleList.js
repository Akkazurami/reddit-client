import React from 'react';
import { useSelector } from 'react-redux';

import './ArticleList.css';

import { selectArticles } from './articlesSlice';

import Categories from '../categories/Categories';
import Card from '../../components/card/Card.js';

export function ArticleList() {
    const articles = useSelector(selectArticles);

    return (
    <main>
        <Categories />
        <section className='article-list'>
            {articles.map(article => {
                return <Card article={article} />
            })}
        </section>
    </main>
        
    )
}