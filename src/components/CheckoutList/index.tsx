import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";
import { useAppSelector } from "../../hooks/useAppDispatchSelector";

import { Wrapper, Qty } from "./checkoutList.styled";

const CheckoutList = () => {
  const {cart} = useAppSelector(state => state.cart)
  const dispatch = useDispatch();

  const addQty = (id:number) => {
    dispatch({ type: "ADD_QTY", payload: id });
  };
  const subQty = (id:number) => {
    dispatch({ type: "SUB_QTY", payload: id });
  };
  return (
    <>
      CheckoutList
      {cart.map((item) => (
        <Wrapper>
          <img src={item.thumbnailUrl} />
          <span>{item.title}</span>
          <span>QTY:</span>
          <Button onClick={() => subQty(item.id)}>-</Button>
          <Qty>{item.qty ? item.qty : 1}</Qty>
          <Button onClick={() => addQty(item.id)}>+</Button>
        </Wrapper>
      ))}
    </>
  );
};
export default CheckoutList;
