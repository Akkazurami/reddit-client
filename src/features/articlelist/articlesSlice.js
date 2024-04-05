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
        return response;
    }
)

export const searchArticles = createAsyncThunk(
    'articles/searchArticles',
    async (searchTerm) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`,
        {
            method: 'GET'
        })
        .then(response => response.json());
    return response;
    }
)

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        currentArticle: "",
        currentArticleComments: [],
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
        },
        clearComments(state) {
            return {...state, currentArticleComments: []};
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
            const articleData = action.payload[0].data.children[0];
            const commentsData = action.payload[1].data.children;


            return {
                ...state,
                loadingArticles: false,
                failedToLoadArticles: false,
                currentArticle: articleData,
                currentArticleComments: commentsData
            }
        },
        [loadArticle.rejected]: (state) => {
            return {
                ...state,
                loadingArticles: false,
                failedToLoadArticles: true
            }
        },
        [searchArticles.pending]: (state) => {
            return {
                ...state,
                loadingArticles: true,
                failedToLoadArticles: false
            }
        },
        [searchArticles.fulfilled]: (state, action) => {
            const data = action.payload.data.children;
            return {
                ...state,
                loadingArticles: false,
                failedToLoadArticles: false,
                articles: data
            }
        },
        [searchArticles.rejected]: (state, action) => {
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
export const selectComments = (state) => state.articles.currentArticleComments;
export const isLoadingArticles = (state) => state.articles.loadingArticles;

export const { changeArticles, changeCurrentArticle, clearComments } = articlesSlice.actions;

export default articlesSlice.reducer;