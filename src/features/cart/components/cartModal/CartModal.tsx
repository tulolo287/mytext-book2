import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./cart-modal.module.css";
import CartModalItem from "../cartModalItem/CartModalItem";

const CartModal = () => {
  const { cart, isCartModal } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "SET_CART_MODAL" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <>
      <section className={s.cartModal}>
        {cart.length ? (
          <>
            {cart.map((book) => (
              <CartModalItem book={book} />
            ))}
            <Button onClick={clearCart} type="dashed">
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
      </section>
      <div className={s.cartModal__wraper} onClick={handleClick}></div>
    </>
  );
};

export default CartModal;
