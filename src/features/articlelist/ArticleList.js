import React from 'react';
import './ArticleList.css';

import Article from '../../components/article/Article';

export function ArticleList() {
    return (
        <section className='article-list'>
            <Article />
            <Article />
            <Article />
        </section>
    )
}