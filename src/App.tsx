import "./styles.css";
import MyHeader from "./modules/MyHeader";
import Router from "./components/Router";
import { Content } from "antd/es/layout/layout";

export default function App() {
  return (
    <div className="App">
      <MyHeader />
      <Content>
        <Router />
      </Content>
    </div>
  );
}
