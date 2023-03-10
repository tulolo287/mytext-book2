import { useDispatch } from "react-redux";
import { IBook } from "../model/IBook";

export function useLocalStorage() {
  if (localStorage.getItem("cart") && !localStorage.getItem("cart")?.length) {
    const cart = localStorage.getItem("cart");
    return JSON.parse(cart!);
  }
}
