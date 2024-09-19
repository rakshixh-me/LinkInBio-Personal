import React from "react";
import SocialCardsCSS from "./SocialCards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
  faPinterestP,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { socialIconLinks } from "../../data";

const iconMap = {
  Email: faPaperPlane,
  LinkedIn: faLinkedinIn,
  Pinterest: faPinterestP,
  Instagram: faInstagram,
};

function SocialCards() {
  return (
    <div className={SocialCardsCSS.socialsMainDiv}>
      <div className={SocialCardsCSS.div1}>
        <button
          className={SocialCardsCSS.mainButton}
          onClick={() =>
            window.open(socialIconLinks.mainSocials[0].link, "_blank")
          }
        >
          <FontAwesomeIcon icon={faGithubAlt} size="6x" />
        </button>
      </div>

      <div className={SocialCardsCSS.div2}>
        {socialIconLinks.subSocials.map((social, index) => (
          <button
            key={index}
            className={SocialCardsCSS.button}
            onClick={() => window.open(social.link, "_blank")}
          >
            <FontAwesomeIcon icon={iconMap[social.name]} size="lg" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SocialCards;
