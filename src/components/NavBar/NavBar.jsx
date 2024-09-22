import React, { useState } from "react";
import NavCSS from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSecret,
  faTachographDigital,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";

function NavBar({ onNavClick }) {
  const [activeButton, setActiveButton] = useState("dev");

  const handleClick = (value) => {
    setActiveButton(value);
    onNavClick(value);
  };

  return (
    <nav className={NavCSS.navbar}>
      <button
        className={`${NavCSS.navItem} ${
          activeButton === "dev" ? NavCSS.active : NavCSS.inactive
        }`}
        onClick={() => handleClick("dev")}
      >
        <FontAwesomeIcon icon={faUserSecret} />
      </button>
      <button
        className={`${NavCSS.navItem} ${
          activeButton === "art" ? NavCSS.active : NavCSS.inactive
        }`}
        onClick={() => handleClick("art")}
      >
        <FontAwesomeIcon icon={faTachographDigital} />
      </button>
      <button
        className={`${NavCSS.navItem} ${
          activeButton === "photo" ? NavCSS.active : NavCSS.inactive
        }`}
        onClick={() => handleClick("photo")}
      >
        <FontAwesomeIcon icon={faCameraRetro} />
      </button>
    </nav>
  );
}

export default NavBar;
