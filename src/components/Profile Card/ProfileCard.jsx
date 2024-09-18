import React from "react";
import ProfileCardCSS from "./ProfileCard.module.css";
import rakshixh from "../../assets/rakshixhDev.png";

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
      <div>
        <button className={ProfileCardCSS.btn}>
          <p>Social Accounts</p>
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
