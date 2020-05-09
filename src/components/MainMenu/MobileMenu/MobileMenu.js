import React, { useContext } from "react";
import { Ctx } from "../../../Store";
import BurgerMenu from "../../burgerMenu/burgerMenu.js";

const MobileMenu = props => {
  const { store } = useContext(Ctx);

  return (
    <div className="mainMenu--mobile">
      <div className="mainMenu--mobile_logo">TC</div>
      <div className="mainMenu--mobile_username">
        {store.user.first_name + " " + store.user.last_name[0] + "."}
      </div>
      <BurgerMenu activeBurger={props.activeBurger} setActiveBurger={props.setActiveBurger} />
    </div>
  );
};

export default MobileMenu;
