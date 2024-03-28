import { createSlice } from "@reduxjs/toolkit";

import redditAlien from '../../assets/reddit-alien.png';

const articlesSlice = createSlice({
    name: 'articles',
    initialState: [
        {
            voteCount: '456',
            title: 'This is an article title!',
            imgSrc: redditAlien,
            author: 'Author',
            time: '1 hour ago',
            commentCount: '123'
        },
        {
            voteCount: '789',
            title: 'This is another article title!',
            imgSrc: redditAlien,
            author: 'Different Author',
            time: '2 days ago',
            commentCount: '205'
        }
    ],
    reducers: {
        changeArticles(state, action) {
            return action.payload;
        }
    }
})

export const selectArticles = (state) => state.articles;

export const { changeArticles } = articlesSlice.actions;

export default articlesSlice.reducer;