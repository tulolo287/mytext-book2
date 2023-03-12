import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { IRoute } from "../../../model/IRoute";

type MenuItemProps = {
  route: IRoute
}
const MenuItem: FC<MenuItemProps> = ({ route }) => {
  return (
    <>
      <Link to={route.path}>{route.name}</Link>
    </>
  );
};

export default MenuItem;
