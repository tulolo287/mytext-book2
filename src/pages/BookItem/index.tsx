import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppDispatchSelector";

const BookItem = () => {
  const { id } = useParams();
  const { catalog } = useAppSelector((state) => state.catalog);
  const book = catalog.find((book) => book.id.toString() == id);
  return (
    <>
      {book ? (
        <>
          <img src={book.url} alt={book.title} />
          <h1>{book.title}</h1>
          <span>description</span>
        </>
      ) : (
        "Not found"
      )}
    </>
  );
};
export default BookItem;
