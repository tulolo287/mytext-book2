import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

interface IRoute {
  name: string;
  path: string;
  element: ReactElement;
}
const MenuItem: FC<IRoute> = ({ route }) => {
  return (
    <>
      <Link to={route.path}>{route.name}</Link>
    </>
  );
};

export default MenuItem;
