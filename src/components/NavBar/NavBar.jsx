import React, { useState } from "react";
import NavCSS from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCamera,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

function NavBar({ onNavClick }) {
  const [activeButton, setActiveButton] = useState("home");

  const handleClick = (value) => {
    setActiveButton(value);
    onNavClick(value);
  };

  return (
    <nav className={NavCSS.navbar}>
      <button
        className={`${NavCSS.navItem} ${
          activeButton === "home" ? NavCSS.active : NavCSS.inactive
        }`}
        onClick={() => handleClick("home")}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
      <button
        className={`${NavCSS.navItem} ${
          activeButton === "art" ? NavCSS.active : NavCSS.inactive
        }`}
        onClick={() => handleClick("art")}
      >
        <FontAwesomeIcon icon={faComputer} />
      </button>
      <button
        className={`${NavCSS.navItem} ${
          activeButton === "photo" ? NavCSS.active : NavCSS.inactive
        }`}
        onClick={() => handleClick("photo")}
      >
        <FontAwesomeIcon icon={faCamera} />
      </button>
    </nav>
  );
}

export default NavBar;
