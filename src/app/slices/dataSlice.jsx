import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name : "data",
    initialState : {
        loading : false,
        error : null,
        data : []
    },
    reducers : {
        setLoading : (state,action) => {
            state.loading = action.payload;
        },
        setError : (state,action) => {
            state.error = action.payload;
        },
        setData : (state,action) => {
            state.data = action.payload;
        }
    }
})

export const { setLoading , setError , setData } = dataSlice.actions;
export default dataSlice.reducer; 