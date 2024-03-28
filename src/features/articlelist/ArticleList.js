import React from 'react';
import { useSelector } from 'react-redux';

import './ArticleList.css';

import Article from '../../components/article/Article';

import { selectArticles } from './articlesSlice';

export function ArticleList() {
    const articles = useSelector(selectArticles);

    return (
        <section className='article-list'>
            {articles.map(article => {
                return <Article article={article} />
            })}
        </section>
    )
}