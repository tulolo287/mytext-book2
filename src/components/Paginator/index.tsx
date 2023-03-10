import { Pagination } from "antd";
import {
  FC,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

type PaginatorProps = {
  getCurrentPage: (page: number) => void;
  totalPages: number;
};
const Paginator: FC<PaginatorProps> = ({ getCurrentPage, totalPages }) => {
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }

  function handleChange(page: number) {
    getCurrentPage(page);
  }

  return (
    <>
      <Pagination
        onChange={handleChange}
        defaultCurrent={1}
        pageSize={3}
        total={10}
      />
    </>
  );
};
export default Paginator;
