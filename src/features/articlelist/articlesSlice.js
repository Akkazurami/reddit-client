import { createSlice } from "@reduxjs/toolkit";

import redditAlien from '../../assets/reddit-alien.png';

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        currentArticleId: "",
        articles: [
            {
                id: "ib123",
                voteCount: '456',
                title: 'This is an article title!',
                imgSrc: redditAlien,
                author: 'Author',
                time: '1 hour ago',
                commentCount: '123'
            },
            {
                id: "Hxlw7",
                voteCount: '789',
                title: 'This is another article title!',
                imgSrc: redditAlien,
                author: 'Different Author',
                time: '2 days ago',
                commentCount: '205'
            }
        ]
    },
    reducers: {
        changeCurrentArticle(state, action) {
            return {...state, currentArticleId: action.payload}
        },
        changeArticles(state, action) {
            return {...state, articles: action.payload};
        }
    }
})

export const selectArticles = (state) => state.articles.articles;
export const selectArticle = (state) => state.articles.articles.filter(article => article.id === state.articles.currentArticleId)[0];

export const { changeArticles } = articlesSlice.actions;
export const { changeCurrentArticle } = articlesSlice.actions;

export default articlesSlice.reducer;