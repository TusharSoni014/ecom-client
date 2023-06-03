import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const fetchTopPicks = createAsyncThunk(
  "fetch/toppicks",
  async () => {
    try {
      const response = await axiosClient.get("/products?populate=image&filters[isTopPick][$eq]=true");
      return response.data.data;
    } catch (error) {
      Promise.reject(error);
    }
  }
);

const topPickslice = createSlice({
  name: "topPickslice",
  initialState: {
    topPicks: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopPicks.fulfilled, (state, action) => {
      state.topPicks = action.payload;
    });
  },
});

export default topPickslice.reducer;
