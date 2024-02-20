import { configureStore } from "@reduxjs/toolkit";
import shopingItemsReducer from "./shopingItems";

export const shopingCart = configureStore({
  reducer: {
    shopingItems: shopingItemsReducer,
  },
});
