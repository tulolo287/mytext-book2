import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IBook } from "../../model/IBook";
import { RootState } from "../../store";
import { getCartLocalStorage } from "../../uilities";


const initialState = {
  cart: getCartLocalStorage() as IBook[],
  isCartModal: false
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<IBook[]>) => {
      state.cart = action.payload;
    },
    addToCart: (state, action: PayloadAction<IBook>) => {
      console.log("payload", action.payload);
      state.cart = state.cart.concat(action.payload);
      //localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    cartModalToggle: (state) => {
      state.isCartModal = !state.isCartModal;
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      //localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    }
  }
});

export const {
  setCart,
  addToCart,
  cartModalToggle,
  deleteCartItem,
  clearCart
} = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
