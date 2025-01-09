import React from "react";
import ProfileCardCSS from "./ProfileCard.module.css";

function ProfileCard({profileImageUrl}) {
  return (
    <div
      className={ProfileCardCSS.card}
      style={{ animation: "fadeInEffect 2s ease-in-out forwards" }}
    >
      <div className={ProfileCardCSS.imgDivContentDiv}>
        <img src={profileImageUrl} alt="rakshixh" className={ProfileCardCSS.img} />
        <div className={ProfileCardCSS.contentDiv}>
          <h2>Rakshith Acharya</h2>
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
