import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartModal from "./components/cartModal/CartModal";
import { useAppSelector } from "../../hooks/useAppDispatchSelector";

const Cart = () => {
  const {cart, isCartModal} = useAppSelector(state => state.cart)
  
  const dispatch = useDispatch();

  const cartStyles = {
    fontSize: 40,
    color: "white",
    cursor: "pointer"
  };
  const handleModal = () => {
    dispatch({ type: "SET_CART_MODAL" });
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
