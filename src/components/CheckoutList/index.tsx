import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Wrapper, Qty } from "./checkoutList.styled.ts";

const CheckoutList = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const addQty = (id) => {
    dispatch({ type: "ADD_QTY", payload: id });
  };
  const subQty = (id) => {
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
