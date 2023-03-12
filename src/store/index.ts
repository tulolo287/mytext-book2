import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "../features/cart/cartSlice";
import catalogReducer from "../features/catalog/catalogSlice";
import userReducer from "../features/user/userSlice";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { getCartLocalStorage, setCartLocalStorage } from "../uilities";

const rootReducer = combineReducers({
  cart: cartReducer,
  catalog: catalogReducer,
  user: userReducer,
});
const preloadedState = {
  cart: { cart: getCartLocalStorage(), isCartModal: false }
}
const store = configureStore({ reducer: rootReducer, middleware: [thunk]});

store.subscribe(() => {setCartLocalStorage(store.getState())})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//window.state = store.getState;
export default store;
