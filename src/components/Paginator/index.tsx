import { Pagination } from "antd";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const Paginator = ({ getCurrentPage, totalPages }) => {
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }

  function handleChange(page) {
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
