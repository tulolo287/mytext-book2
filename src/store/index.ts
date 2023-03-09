import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "../features/cart/cartSlice";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit"

const rootReducer = combineReducers({ cart: cartReducer});

const store = configureStore({reducer: rootReducer, middleware: [thunk]});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
window.state = store.getState;
export default store;
