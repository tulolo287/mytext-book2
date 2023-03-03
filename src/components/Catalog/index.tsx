import CatalogItem from "./CatalogItem";
import s from "./catalog.module.css";
import { useSelector } from "react-redux";
import Paginator from "../Paginator";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { Pagination } from "antd";

export default function Catalog() {
  const { isLoading } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      dispatch({ type: "SET_CART", payload: cart });
    }
    async function fetchData(url) {
      dispatch({ type: "SET_LOADING", payload: true });
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "SET_BOOKS", payload: data });
      dispatch({ type: "SET_LOADING", payload: false });
    }
    fetchData("https://jsonplaceholder.typicode.com/photos?_limit=10");
  }, []);

  const { books } = useSelector((state) => state.cartReducer);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = 10;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getCurrentPage = (currentPage) => setCurrentPage(currentPage);

  const endSector = currentPage * itemsPerPage;
  const startSector = endSector - itemsPerPage;
  const booksPerPage = books.slice(startSector, endSector);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={s.catalog}>
          {booksPerPage.map((book) => (
            <CatalogItem book={book} />
          ))}

          <Paginator totalPages={totalPages} getCurrentPage={getCurrentPage} />
        </section>
      )}
    </>
  );
}
