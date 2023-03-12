import { RootState } from "../store";

export const getCartLocalStorage = () => {
   const cart = localStorage.getItem("cart");
   if (cart) {
     return JSON.parse(cart)
   }
   return []
 }

 export const setCartLocalStorage = (state: RootState) => {
   localStorage.setItem('cart', JSON.stringify(state.cart.cart))
 }