import MenuItem from "./menu-item/MenuItem";

const Menu = ({ routes }) => {
  return (
    <>
      Menu
      {routes.map((route) => (
        <MenuItem route={route} />
      ))}
    </>
  );
};
export default Menu;
