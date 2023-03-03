import { NavLink } from "react-router-dom";
import s from "./catalog-item.module.css";
import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

const CatalogItem = ({ book }) => {
  const { id, title, thumbnailUrl } = book;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: book });
    useLocalStorage(cart);
    console.log(book);
    console.log(cart);
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
      <Button type="primary" onClick={addToCart}>
        Add to cart
      </Button>
    </article>
  );
};
export default CatalogItem;
