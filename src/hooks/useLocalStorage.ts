import { useDispatch } from "react-redux";

type CartItem = {
  id: number;
  qty: number;
};
export function useLocalStorage(newCart) {
  if (localStorage.getItem("cart")) {
    const cart = localStorage.getItem("cart");
    return JSON.parse(cart);
  } else {
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
}
