import s from "./main.module.css";

const Main = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};
export default Main;
