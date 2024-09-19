import React from "react";
import ProfileCardCSS from "./ProfileCard.module.css";
import rakshixh from "../../assets/rakshixhDev.png";
import { socialIconLinks } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
  faPinterestP,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  GitHub: faGithubAlt,
  LinkedIn: faLinkedinIn,
  Pinterest: faPinterestP,
  Instagram: faInstagram,
  Email: faPaperPlane,
};

function ProfileCard() {
  return (
    <div className={ProfileCardCSS.mainDiv}>
      <div className={ProfileCardCSS.card}>
        <div className={ProfileCardCSS.imgDivContentDiv}>
          <img src={rakshixh} alt="rakshixh" className={ProfileCardCSS.img} />
          <div className={ProfileCardCSS.contentDiv}>
            <h2>Rakshith Acharya</h2>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
      <div className={ProfileCardCSS.socialIconsDiv}>
        {socialIconLinks.map((social) => (
          <a
            href={social.link}
            key={social.name}
            className={ProfileCardCSS.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={iconMap[social.name]} fixedWidth />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
