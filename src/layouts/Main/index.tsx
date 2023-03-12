import React from "react";
import s from "./main.module.css";

const Main = ({ children }:React.HTMLAttributes<HTMLElement>) => {
  return <main className={s.main}>{children}</main>;
};
export default Main;
