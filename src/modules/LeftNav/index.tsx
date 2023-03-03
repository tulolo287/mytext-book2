import { categories } from "../../router/routes";
import Menu from "../../components/menu/Menu";
import s from "./left-nav.module.css";

const LeftNav = () => {
  return (
    <section className={s.leftNav}>
      <Menu routes={categories} />
    </section>
  );
};

export default LeftNav;
