import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: [],
};

export const filterSlice = createSlice({
    name: "initialState",
    initialState,
    reducers: {
        addToFilter : (state,action)=>{
            state.filter = action.payload
        }
    },
});

// Action creators are generated for each case reducer function
export const { addToFilter} = filterSlice.actions;

export default filterSlice.reducer;
