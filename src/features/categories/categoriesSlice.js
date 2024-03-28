import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'category',
    initialState: "Popular",
    reducers: {
        changeCategory(state, action) {
            return action.payload;
        }
    }
})

export const selectCategory = (state) => state.category;

export const {changeCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;