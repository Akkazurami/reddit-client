import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ArticleList.css';

import { selectArticles, loadArticles, isLoadingArticles } from './articlesSlice';
import { selectCategory } from '../categories/categoriesSlice.js';

import Categories from '../categories/Categories';
import Card from '../../components/card/Card.js';

export function ArticleList() {
    const dispatch = useDispatch();

    const articles = useSelector(selectArticles);
    const articlesAreLoading = useSelector(isLoadingArticles);
    const category = useSelector(selectCategory);

    useEffect(() => {
        dispatch(loadArticles(`r/${category}`));
    }, [category, dispatch])

    let body;
    if (articlesAreLoading) {
        body = (
            <main>
                <Categories />
                <section className='article-list'>
                    <article id='loading'>
                        <p>...Loading Articles</p>
                    </article>
                </section>
            </main>
        );
    } else {
        body = (
            <main>
                <Categories />
                <section className='article-list'>
                    {articles.map(article => <Card article={article} key={article.data.id}/>)}
                </section>
            </main>
        )
    }

    return (
    <main>
        {body}
    </main>
        
    )
}