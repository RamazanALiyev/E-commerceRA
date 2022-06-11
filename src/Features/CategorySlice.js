import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commerce from '../lib/Ecommerce'
const initialState = {
  categories: [],
  status: "idle",
  error: null,
};
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    let data = await commerce.categories
    .retrieve("mehsullar", { type: "slug", depth: "3" })
    .then((category) => category.children);
    return data;
  }
);
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.categories = action.error.message;
      });
  },
});
// export const {} = productsSlice.actions;

export default categoriesSlice.reducer;



