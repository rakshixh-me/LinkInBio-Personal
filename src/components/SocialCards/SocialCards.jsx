import React, { useState } from "react";
import SocialCardsCSS from "./SocialCards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
  faPinterestP,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faIdCard, faTimes } from "@fortawesome/free-solid-svg-icons";
import { socialIconLinks } from "../../data";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const iconMap = {
  GitHub: faGithubAlt,
  LinkedIn: faLinkedinIn,
  Pinterest: faPinterestP,
  Instagram: faInstagram,
};

function SocialCards() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={SocialCardsCSS.socialsMainDiv}>
      <div className={SocialCardsCSS.div1}>
        <button className={SocialCardsCSS.mainButton} onClick={toggleModal}>
          <FontAwesomeIcon icon={faIdCard} size="6x" />
        </button>
      </div>

      <div className={SocialCardsCSS.div2}>
        {socialIconLinks.map((social, index) => (
          <button
            key={index}
            className={SocialCardsCSS.button}
            onClick={() => window.open(social.link, "_blank")}
          >
            <FontAwesomeIcon icon={iconMap[social.name]} size="lg" />
          </button>
        ))}
      </div>

      {isModalOpen && (
        <div className={SocialCardsCSS.modalOverlay}>
          <div className={SocialCardsCSS.modalContent}>
            <div className={SocialCardsCSS.divCloseBtn}>
              <button
                className={SocialCardsCSS.closeButton}
                onClick={toggleModal}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
              <div className={SocialCardsCSS.pdf}>
                <Viewer fileUrl="/sample.pdf" />
              </div>
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialCards;
