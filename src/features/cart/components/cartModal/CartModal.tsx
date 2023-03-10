import { Button } from "antd";
import { Link } from "react-router-dom";
import s from "./cart-modal.module.css";
import { Modal } from "antd";
import CartModalItem from "../cartModalItem/CartModalItem";
import {
  useAppDispatch,
  useAppSelector
} from "../../../../hooks/useAppDispatchSelector";
import { cartModalToggle, clearCart, deleteCartItem } from "../../cartSlice";

const CartModal = () => {
  const { cart, isCartModal } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCancel = () => {
    dispatch(cartModalToggle());
  };
  return (
    <>
      <Modal title="Your cart" open={isCartModal} onCancel={handleCancel}>
        {cart.length ? (
          <>
            {cart.map((book) => (
              <CartModalItem book={book} />
            ))}
            <Button onClick={handleClearCart} type="dashed">
              Clear cart
            </Button>
            <Link
              to="/checkout"
              onClick={() => dispatch({ type: "SET_CART_MODAL" })}
            >
              Checkout
            </Link>
          </>
        ) : (
          <h3>Your cart is empty!</h3>
        )}
      </Modal>
    </>
  );
};

export default CartModal;
