import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "../features/cart/cartSlice";
import catalogReducer from "../features/catalog/catalogSlice";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartReducer,
  catalog: catalogReducer
});

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
window.state = store.getState;
export default store;
