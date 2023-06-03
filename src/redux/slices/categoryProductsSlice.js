import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const fetchCategoriesProducts = createAsyncThunk(
  "fetch/categoriesProducts",
  async (data) => {
    try {
      const response = await axiosClient.get(
        `/products?filters[category][key][$eqi]=${data}&populate=image,category`
      );
      return response.data.data;
    } catch (error) {
      Promise.reject(error);
    }
  }
);
export const fetchAllProducts = createAsyncThunk(
  "fetch/allProducts",
  async () => {
    try {
      const response = await axiosClient.get(
        `/products?populate=image,category`
      );
      return response.data.data;
    } catch (error) {
      Promise.reject(error);
    }
  }
);

const categoryProductsSlice = createSlice({
  name: "categoryProductsSlice",
  initialState: {
    products: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export default categoryProductsSlice.reducer;
