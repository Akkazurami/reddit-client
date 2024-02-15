import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: "",
    reducers: {
        changeSearchTerm(state, action) {
            return action.payload;
        },
        clearSearchTerm(state) {
            return "";
        }
    }
});

export const selectSearchTerm = (state) => state.searchTerm;

export const { changeSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;