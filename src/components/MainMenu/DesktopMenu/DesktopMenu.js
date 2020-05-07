import React, { useState, useContext, useEffect } from "react";
import { Ctx } from "../../../Store";
import authenticationService from "../../../services/authentication.service";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  const { store, setUser } = useContext(Ctx);
  const auth = new authenticationService({
    url: store.apiUrl
  });
  const [activeLogo, setActiveLogo] = useState(false);
  let chevronClass = "mainMenu_logo-chevron";
  let boxLogoClass = "mainMenu_logo-menu";
  let redirectToHome = <></>;
  const toggleActiveLogo = () => {
    setActiveLogo(!activeLogo);
  };
  const logout = () => {
    toggleActiveLogo();
    auth.logout();
    const emptyUser = {
      username: null
    }
    setUser(emptyUser);
  };
  useEffect(() => {
    return () => { };
  }, [redirectToHome]);
  if (activeLogo) {
    chevronClass += " mainMenu_logo-chevron--active";
    boxLogoClass += " mainMenu_logo-menu--active";
  } else {
    boxLogoClass += " mainMenu_logo-menu--disabled";
  }

  return (
    <div className="mainMenu--desktop">
      <div className="mainMenu_item">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mainMenu-ball disabled"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 20.75C11.3145 20.75 10.7578 20.1883 10.7578 19.4988H9.51557C9.51557 20.8781 10.6305 22 12 22C13.3696 22 14.4845 20.8781 14.4845 19.4988H13.2423C13.2423 20.1883 12.6856 20.75 12 20.75ZM20.1282 15.0785C19.0428 14.0387 18.2128 12.9504 18.2128 9.26172C18.2128 6.15273 15.752 3.61719 12.6212 3.31055V2.625C12.6212 2.27969 12.3432 2 12 2C11.6569 2 11.3789 2.27969 11.3789 2.625V3.31094C8.2481 3.61758 5.78731 6.15273 5.78731 9.26172C5.78731 12.95 4.95695 14.0387 3.87154 15.0785C3.32923 15.598 3.15803 16.3836 3.43482 17.0797C3.71743 17.7906 4.39755 18.25 5.16774 18.25H18.8324C19.6025 18.25 20.2827 17.7902 20.5653 17.0793C20.8421 16.3832 20.6705 15.598 20.1282 15.0785V15.0785ZM18.8324 17H5.16774C4.61533 17 4.33932 16.3566 4.7283 15.984C6.08156 14.6875 7.02954 13.2363 7.02954 9.26211C7.02954 6.63008 9.25276 4.5 12 4.5C14.7469 4.5 16.9706 6.62969 16.9706 9.26172C16.9706 13.2207 17.9104 14.6797 19.2718 15.9836C19.6623 16.3582 19.3824 17 18.8324 17Z" />
        </svg>
      </div>
      <div onClick={toggleActiveLogo} className="mainMenu_item">
        <span className="mainMenu_logo-title">
          {store.user.first_name + " " + store.user.last_name[0] + "."}
        </span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          className={chevronClass}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.17818 8.23487L1.38242 4.43909C1.19935 4.25602 1.19935 3.95922 1.38242 3.77618L1.82513 3.33346C2.00789 3.15071 2.30408 3.15036 2.48726 3.33268L5.50964 6.3409L8.53201 3.33268C8.71519 3.15036 9.01138 3.15071 9.19414 3.33346L9.63685 3.77618C9.81992 3.95924 9.81992 4.25604 9.63685 4.43909L5.84111 8.23487C5.65804 8.41792 5.36125 8.41792 5.17818 8.23487Z" />
        </svg>
      </div>
      <div className={boxLogoClass}>
        <Link
          className="mainMenu_logo-menu--item mainMenu-red"
          onClick={logout}
          to="/"
        >
          Выход
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
