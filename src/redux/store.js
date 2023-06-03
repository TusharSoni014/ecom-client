import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categorySlice from "./slices/categorySlice";
import topPicksSlice from "./slices/topPicksSlice";
import categoryProductsSlice from "./slices/categoryProductsSlice";
import cartSlice from "./slices/cartSlice";

const cartPersistConfig = {
  key: "cart",
  storage: storage,
  blacklist: [] // Add any reducer keys you want to exclude from persistence
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    categorySlice,
    topPicksSlice,
    categoryProductsSlice,
    cart: persistedCartReducer // Use the persisted cart reducer
  }
});

export const persistor = persistStore(store);
