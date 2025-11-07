import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const findItemIndex = (items, id) => items.findIndex(i => i.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // { id, name, price, ... }
      const idx = findItemIndex(state.cartItems, item.id);

      if (idx >= 0) {
        // update existing
        state.cartItems[idx].quantity += 1;
        state.cartItems[idx].totalPrice += item.price;
      } else {
        // add new item
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const idx = findItemIndex(state.cartItems, id);
      if (idx >= 0) {
        const item = state.cartItems[idx];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.totalPrice;
        state.cartItems.splice(idx, 1);
      }
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload; // type: "inc" | "dec"
      const idx = findItemIndex(state.cartItems, id);
      if (idx >= 0) {
        const item = state.cartItems[idx];
        if (type === "inc") {
          item.quantity += 1;
          item.totalPrice += item.price;
          state.totalQuantity += 1;
          state.totalPrice += item.price;
        } else if (type === "dec") {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice -= item.price;
            state.totalQuantity -= 1;
            state.totalPrice -= item.price;
          } else {
            // if quantity would go to 0, remove item
            state.totalQuantity -= 1;
            state.totalPrice -= item.price;
            state.cartItems.splice(idx, 1);
          }
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
