import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commerce from "../lib/Ecommerce";
const initialState = {
  products: [],
  status: "idle",
  error: null,
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filterName) => {
    let data = await commerce.products
      .list({ category_slug: [filterName.toLowerCase()], limit:100 })
      .then((res) => res.data);
    return data;
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
// export const {} = productsSlice.actions;

export default productsSlice.reducer;
