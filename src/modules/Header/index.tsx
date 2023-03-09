import Menu from "../../components/menu/Menu";
import { pages } from "../../router/routes";
import styles from "./header.module.css";
import Logo from "../../components/Logo";
import Cart from "../../features/cart/Cart";
const Header = () => {
  return (
    <nav className={styles.header}>
      <Logo />
      <Menu routes={pages} />
      <div style={{ position: "fixed", top: 10, right: 10, zIndex: 999 }}>
        <Cart />
      </div>
    </nav>
  );
};
export default Header;
