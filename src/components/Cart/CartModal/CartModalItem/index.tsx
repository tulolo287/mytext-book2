import { DeleteOutlined, CloseOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import s from "./cart-modal-item.module.css";

const CartModalItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: "DELETE_FROM_CART", payload: book.id });
  };
  return (
    <>
      <section className={s.cartModalItem}>
        <h3>{book.title}</h3>

        <CloseOutlined
          className={s.cartModalItem__delete}
          onClick={handleDelete}
        />
      </section>
    </>
  );
};

export default CartModalItem;
