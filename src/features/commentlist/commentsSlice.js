import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [
        {
            commentId: "398U4",
            articleId: "ib123",
            commentText: "This is a comment"
        },
        {
            commentId: "Yo7nR",
            articleId: "Hxlw7",
            commentText: "Another comment saying the previous comment is dumb. :-P"
        },
        {
            commentId: "O1Ml4",
            articleId: "Hxlw7",
            commentText: "An argumentative comment."
        },
        {
            commentId: "Gg70q",
            articleId: "Hxlw7",
            commentText: "Sad comment. :-("
        }
    ],
    reducers: {
        changeComments(state, action) {
            return {...state, comments: action.payload}
        }
    }
})

export const selectComments = (state) => state.comments.filter(comment => comment.articleId === state.articles.currentArticleId);

export const { changeComments } = commentsSlice.actions;

export default commentsSlice.reducer;