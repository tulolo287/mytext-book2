import { pages } from "../../router/routes";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {pages.map((route) => (
        <Route path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default Router;
