import "./styles.css";
import Header from "./modules/Header";
import Router from "./components/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./store/reducers/cart/cartActionCreators";

export default function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}
