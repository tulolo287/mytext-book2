import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IBook } from "../../model/IBook";
import { RootState } from "../../store";


const initialState = {
   cart: [] as IBook[],
   isCartModal: false
}
export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<IBook>) => {
         state.cart.push(action.payload)
      },
      cartModalOn: state => {
         state.isCartModal = true
      },
      cartModalOff: state => {
         state.isCartModal = false
      }
   }
})

export const {addToCart, cartModalOn, cartModalOff} = cartSlice.actions
export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer