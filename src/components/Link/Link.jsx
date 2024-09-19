import React from "react";
import LinkCSS from "./Link.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

function Link({ ArrayOfLinks }) {
  return (
    <div
      className={LinkCSS.linksMainDiv}
      style={{ animation: "fadeInEffect 2s ease-in-out forwards" }}
    >
      {ArrayOfLinks.map((link, index) => {
        return (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className={LinkCSS.link}
          >
            {link.name}
            <FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" />
          </a>
        );
      })}
    </div>
  );
}

export default Link;
