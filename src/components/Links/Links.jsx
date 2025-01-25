import React from "react";
import LinkCSS from "./Links.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

function Link({ linksData, linksStyle }) {
  return (
    <div
      className={LinkCSS.linksMainDiv}
      style={{ animation: "fadeInEffect 2s ease-in-out forwards" }}
    >
      {linksData?.map((link, index) => {
        return (
          <a
            key={index}
            href={link?.link}
            target="_blank"
            rel="noreferrer"
            className={LinkCSS.link}
            style={{
              backgroundColor:
                linksStyle?.link_background_color ?? "var(--white)",
              color: linksStyle?.link_color ?? "var(--dark)",
            }}
          >
            {link?.name}
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              size="lg"
              className={LinkCSS.icon}
              style={{ color: linksStyle?.icon_color ?? "var(--dark)" }}
            />
          </a>
        );
      })}
    </div>
  );
}

export default Link;
