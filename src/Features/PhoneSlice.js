import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commerce from "../lib/Ecommerce";

const initialState = {
  phones: [],
  status: "idle", // pending => loading // full- sucess
  error: null,
};
export const fetchPhones = createAsyncThunk("phones/fetchPhones", async () => {
  let data = await commerce.products
    .list({ category_slug: ["Phones"] })
    .then((phones) => {
      return phones.data;
    });
  return data;
});

export const phonesSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {

  }, // regular reducecers 
  extraReducers(builder) { // extra reducers 
    builder
      .addCase(fetchPhones.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.phones = action.payload;
      })
      .addCase(fetchPhones.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default phonesSlice.reducer;
