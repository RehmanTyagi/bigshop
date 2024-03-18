// authSlice.js
import { createSlice } from '@reduxjs/toolkit';


const form = createSlice({
    name: 'form',
    initialState: {
        currentPage: 1,
        formData: {}
    },
    reducers: {

        nextPage: (state) => {
            state.currentPage += 1;
        },
        prevPage: (state) => {
            state.currentPage -= 1
        },
        updateFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload }
        }
    },
});

export const selectFormData = (state) => state.form.formData;
export const selectCurrentPage = (state) => state.form.currentPage;
export const { nextPage, prevPage, updateFormData } = form.actions

export default form.reducer;
