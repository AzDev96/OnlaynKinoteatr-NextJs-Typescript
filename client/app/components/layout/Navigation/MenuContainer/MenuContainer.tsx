import { FC } from "react";
import Menu from "./menu/Menu";
import { firstMenu } from "./menu/menu.data";
import GenreMenu from "./genres/GenreMenu";

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
    </div>
  );
};

export default MenuContainer;
