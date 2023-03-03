import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookItem = () => {
  const { id } = useParams();
  const { books } = useSelector((state) => state.cartReducer);
  const book = books.find((book) => book.id == id);
  return (
    <>
      <img src={book.url} alt={book.title} />
      <h1>{book.title}</h1>
      <span>description</span>
    </>
  );
};
export default BookItem;
