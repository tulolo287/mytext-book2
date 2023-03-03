import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "./reducers/cart/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cartReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));
window.state = store.getState;
export default store;
