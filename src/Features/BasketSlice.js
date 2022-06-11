import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commerce from "../lib/Ecommerce";
import alertify from "alertifyjs";
// import alertify from "alertifyjs";
const initialState = {
  value: [],
  status: "idle",
};

export const getBasket = createAsyncThunk("basket/getBasket", async () => {
  let data = await commerce.cart.retrieve().then((cart) => cart.line_items);
  return data;
});

export const deleteBasket = createAsyncThunk(
  "basket/deleteBasket",
  async (id) => {
    let data = await commerce.cart
      .remove(id)
      .then((res) => res.cart.line_items); // burda silinir
    return data;
  }
);

export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  async (obj) => {
    let data = await commerce.cart.add(obj.id, obj.quantity, obj.detail);
    alertify.success("Məhsul uğurlu artırıldı");
    return data.cart;
  }
);

export const updateBasket = createAsyncThunk(
  "basket/addToBasket",
  async (obj) => {
    let data = await commerce.cart.update(obj.id, { quantity: obj.quantity })
    return data.cart;
  }
);

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},

  extraReducers: {
    [addToBasket.fulfilled]: (state, action) => {
      state.value = action.payload.line_items;
      // alertify.success("Mehsul ugurla elave edildi");
    },
    [getBasket.pending]: (state) => {
      state.status = "loading";
    },
    [getBasket.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "fulfilled";
    },
    [deleteBasket.fulfilled]: (state, action) => {
      state.value = action.payload.line_items;
      state.status = "idle";
    },
  },
});

export default basketSlice.reducer;
