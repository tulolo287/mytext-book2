import { DeleteOutlined, CloseOutlined } from "@ant-design/icons";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../../hooks/useAppDispatchSelector";
import { IBook } from "../../../../model/IBook";
import { deleteCartItem } from "../../cartSlice";
import s from "./cart-modal-item.module.css";

type CartModalItemProps = {
  book: IBook;
};
const CartModalItem: FC<CartModalItemProps> = ({ book }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteCartItem(book.id));
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
