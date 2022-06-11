import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commerce from "../lib/Ecommerce";

const initialState = {
    accessuars: [],
    status: "idle", // pending => loading // full- sucess
    error: null,
};
export const fetchAccessuars = createAsyncThunk("accessuars/fetchAccessuars", async () => {
    let data = await commerce.products
        .list({ category_slug: ["accessories"] })
        .then((phones) => {
            return phones.data;
        });
    return data;

});

export const AccessuarSlice = createSlice({
    name: "accessuars",
    initialState,
    reducers: {

    }, // regular reducecers
    extraReducers(builder) { // extra reducers
        builder
            .addCase(fetchAccessuars.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAccessuars.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.accessuars = action.payload;
            })
            .addCase(fetchAccessuars.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default AccessuarSlice.reducer;
