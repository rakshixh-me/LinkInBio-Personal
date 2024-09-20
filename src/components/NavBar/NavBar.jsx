import React from "react";
import { NavLink } from "react-router-dom";
import NavCSS from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCamera,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className={NavCSS.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${NavCSS.navItem} ${isActive ? NavCSS.active : NavCSS.inactive}`
        }
      >
        <FontAwesomeIcon icon={faHouse} />
      </NavLink>
      <NavLink
        to="/art"
        className={({ isActive }) =>
          `${NavCSS.navItem} ${isActive ? NavCSS.active : NavCSS.inactive}`
        }
      >
        <FontAwesomeIcon icon={faComputer} />
      </NavLink>
      <NavLink
        to="/photo"
        className={({ isActive }) =>
          `${NavCSS.navItem} ${isActive ? NavCSS.active : NavCSS.inactive}`
        }
      >
        <FontAwesomeIcon icon={faCamera} />
      </NavLink>
    </nav>
  );
}

export default NavBar;
