import MyMenu from "../../components/menu/Menu";
import { pages } from "../../router/routes";
import styles from "./header.module.css";
import Logo from "../../components/Logo";
import Cart from "../../features/cart/Cart";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Footer } = Layout;

const MyHeader = () => {
  return (
    <Header>
      <Menu theme="dark">
        <Logo />
        <MyMenu routes={pages} />
        <div style={{ position: "fixed", top: 10, right: 10, zIndex: 999 }}>
          <Cart />
        </div>
      </Menu>
    </Header>
  );
};
export default MyHeader;
