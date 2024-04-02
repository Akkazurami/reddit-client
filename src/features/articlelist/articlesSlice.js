import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadArticles = createAsyncThunk(
    'articles/loadArticles',
    async (parameters) => {
        const response = await fetch(`https://www.reddit.com/${parameters}.json`,
            {
                method: 'GET'
            })
            .then(response => response.json());
        return response;
    }
)

export const loadArticle = createAsyncThunk(
    'articles/loadArticle',
    async (articleId) => {
        const response = await fetch(`https://www.reddit.com/${articleId}.json`,
            {
                method: 'GET'
            })
            .then(response => response.json());
        console.log(response);
        return response;
    }
)

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        currentArticle: "",
        articles: [],
        loadingArticles: false,
        failedToLoadArticles: false
    },
    reducers: {
        changeCurrentArticle(state, action) {
            return {...state, currentArticle: action.payload}
        },
        changeArticles(state, action) {
            return {...state, articles: action.payload};
        }
    },
    extraReducers: {
        [loadArticles.pending]: (state) => {
            return {
                ...state,
                loadingArticles: true,
                failedToLoadArticles: false
            }
        },
        [loadArticles.fulfilled]: (state, action) => {
            const data = action.payload.data.children;

            return {
                ...state,
                loadingArticles: false,
                failedToLoadArticles: false,
                articles: data
            }
        },
        [loadArticles.rejected]: (state) => {
            return {
                ...state,
                loadingArticles: false,
                failedToLoadArticles: true
            }
        },
        [loadArticle.pending]: (state) => {
            return {
                ...state,
                loadingArticles: true,
                failedToLoadArticles: false
            }
        },
        [loadArticle.fulfilled]: (state, action) => {
            const data = action.payload[0].data.children[0];

            return {
                ...state,
                loadingArticles: false,
                failedToLoadArticles: false,
                currentArticle: data
            }
        },
        [loadArticle.rejected]: (state) => {
            return {
                ...state,
                loadingArticles: false,
                failedToLoadArticles: true
            }
        }
    }
})

export const selectArticles = (state) => state.articles.articles;
export const selectCurrentArticle = (state) => state.articles.currentArticle;
export const isLoadingArticles = (state) => state.articles.loadingArticles;

export const { changeArticles, changeCurrentArticle } = articlesSlice.actions;

export default articlesSlice.reducer;