import React from "react";
import LinkCSS from "./Link.module.css";

function Link({ ArrayOfLinks }) {
  return (
    <div
      className={LinkCSS.linksMainDiv}
      style={{ animation: "fadeInEffect 2s ease-in-out forwards" }}
    >
      {ArrayOfLinks.map((link, index) => {
        return (
          <a key={index} href={link.link} className={LinkCSS.link}>
            {link.name}
          </a>
        );
      })}
    </div>
  );
}

export default Link;
