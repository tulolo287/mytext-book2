import { NavLink } from "react-router-dom";
import s from "./catalog-item.module.css";
import { Button, Card } from "antd";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import {
  useAppDispatch,
  useAppSelector
} from "../../../../hooks/useAppDispatchSelector";
import { IBook } from "../../../../model/IBook";
import { FC } from "react";
import { addToCart } from "../../../cart/cartSlice";

type CatalogItemProps = {
  book: IBook;
};

const CatalogItem: FC<CatalogItemProps> = ({ book }) => {
  const { id, title, thumbnailUrl } = book;
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(book));

    console.log("book", book);
    console.log("cart", cart);
  };
  return (
    <article className={s.catalogItem}>
      <NavLink to={`${id}`}>
        <Card
          loading={false}
          hoverable
          cover={<img src={thumbnailUrl} alt={title} />}
        >
          <Card.Meta title={title} description="description" />
        </Card>
      </NavLink>
      <Button type="primary" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </article>
  );
};
export default CatalogItem;
