import { IBook } from "../../../model/IBook";


const ADD_TO_CART = "ADD_TO_CART";
const ADD_QTY = "ADD_QTY";
const SUB_QTY = "SUB_QTY";
const CLEAR_CART = "CLEAR_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const SET_BOOKS = "SET_BOOKS";
const SET_CART = "SET_CART";
const SET_LOADING = "SET_LOADING";
const SET_CART_MODAL = "SET_CART_MODAL";

type AddToCartType = {
  type: typeof ADD_TO_CART,
  payload: IBook
}

export const addToCart = (item:IBook):AddToCartType => ({ type: ADD_TO_CART, payload: item })

type AddQtyType = {
  type: typeof ADD_TO_CART,
  payload: IBook
}

export const addQty = (item:IBook):AddToCartType => ({ type: ADD_TO_CART, payload: item })
