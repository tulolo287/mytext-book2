import { Action } from "redux";

interface IBook {
  id: string;
  qty?: number;
}

type Book = {
  id: string,
  name: string
}

const initialState = {
  cart: [],
  isCartModal: false,
  books: [],
  isLoading: false
};

export default function cartReducer(state = initialState, action:Action) {
  switch (action.type) {
    case "ADD_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            const newItem = { ...item, qty: item.qty ? ++item.qty : 2 };
            return newItem;
          } else {
            return item;
          }
        })
      };
    case "SUB_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            const newItem = {
              ...item,
              qty: item.qty && item.qty > 1 ? --item.qty : item.qty
            };
            return newItem;
          } else {
            return item;
          }
        })
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: !state.cart.find((item) => item.id === action.payload.id)
          ? [...state.cart, { ...action.payload, qty: 1 }]
          : state.cart.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, qty: ++item.qty };
              } else {
                return item;
              }
            })
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload)
      };
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.payload
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload
      };
    case "SET_CART_MODAL":
      return {
        ...state,
        isCartModal: !state.isCartModal
      };
    default:
      return state;
  }
}
