import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload; // the item to be added to the cart
      const existingItemIndex = state.cart.findIndex(
        (item) => item.key === newItem.key
      );
      if (existingItemIndex === -1) {
        state.cart.push(action.payload);
      } else {
        alert("Item is already in your cart !");
      }
    },
    removeFromCart: (state, action) => {
      const itemKey = action.payload;
      state.cart = state.cart.filter((item) => item.key !== itemKey);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
