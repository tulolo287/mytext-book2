import CatalogItem from "./components/catalogItem/CatalogItem";
import s from "./catalog.module.css";
import { useSelector } from "react-redux";

import Paginator from "../../components/Paginator";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import { Pagination } from "antd";
import {
  useAppDispatch,
  useAppSelector
} from "../../hooks/useAppDispatchSelector";
import { loadingOff, loadingOn, setCatalog } from "./catalogSlice";
import { addToCart } from "../cart/cartSlice";
import React from "react";

export default React.memo(function Catalog() {
  const { isLoading, catalog } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
 
    async function fetchData(url: string) {
      dispatch(loadingOn());
      const res = await fetch(url);
      const data = await res.json();
      dispatch(setCatalog(data));
      dispatch(loadingOff());
    }
    fetchData("https://jsonplaceholder.typicode.com/photos?_limit=10");
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = 10;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getCurrentPage = (currentPage: number) => setCurrentPage(currentPage);

  const endSector = currentPage * itemsPerPage;
  const startSector = endSector - itemsPerPage;
  const booksPerPage = catalog.slice(startSector, endSector);

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
})
