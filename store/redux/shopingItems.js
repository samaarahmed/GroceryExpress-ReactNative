import { createSlice } from "@reduxjs/toolkit";

const shopingSlice = createSlice({
  name: "cartItems",
  initialState: {
    ids: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeItem: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addItem = shopingSlice.actions.addItem;
export const removeItem = shopingSlice.actions.removeItem;

export default shopingSlice.reducer;
