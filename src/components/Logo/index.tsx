import { ReactComponent as ReactLogo } from "../../assets/logo.svg";
import s from "./logo.module.css";
const Logo = () => {
  return (
    <>
      <ReactLogo className={s.logo} />
    </>
  );
};
export default Logo;
