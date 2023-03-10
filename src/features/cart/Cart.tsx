import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartModal from "./components/cartModal/CartModal";
import {
  useAppDispatch,
  useAppSelector
} from "../../hooks/useAppDispatchSelector";
import { cartModalToggle, setCart } from "./cartSlice";

const Cart = () => {
  const { cart, isCartModal } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("cart") &&
      !JSON.parse(localStorage.getItem("cart")!).length
    ) {
      setCart(JSON.parse(localStorage.getItem("cart")!));
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("cart", []);
    }
  }, [cart]);

  const cartStyles = {
    fontSize: 40,
    color: "white",
    cursor: "pointer"
  };
  const handleModal = () => {
    dispatch(cartModalToggle());
  };
  return (
    <div style={{ position: "relative", width: "50px" }}>
      <div onClick={handleModal}>
        <Badge count={cart.length}>
          <Avatar
            style={{ background: "rgb(1,0,1,1)" }}
            shape="circle"
            size="large"
          >
            <ShoppingCartOutlined style={cartStyles} />
          </Avatar>
        </Badge>
      </div>
      {isCartModal ? <CartModal /> : null}
    </div>
  );
};
export default Cart;
