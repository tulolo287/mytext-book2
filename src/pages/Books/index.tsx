import Catalog from "../../components/Catalog";
import LeftNav from "../../modules/LeftNav";
import Main from "../../layouts/Main";

const Books = () => {
  return (
    <>
      <Main>
        <LeftNav />

        <Catalog />
      </Main>
    </>
  );
};
export default Books;
