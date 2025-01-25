import React from "react";
import ProfileCardCSS from "./ProfileCard.module.css";

function ProfileCard({ profileImageUrl, profileCardData, profileCardStyle }) {
  return (
    <div
      className={ProfileCardCSS.card}
      style={{
        animation: "fadeInEffect 2s ease-in-out forwards",
        backgroundColor:
          profileCardStyle?.card_background_color ?? "var(--white)",
      }}
    >
      <div className={ProfileCardCSS.imgDivContentDiv}>
        <img
          src={profileImageUrl}
          alt={profileCardData.title}
          className={ProfileCardCSS.img}
        />
        <div
          className={ProfileCardCSS.contentDiv}
          style={{
            color: profileCardStyle?.content_div_color ?? "var(--dark)",
          }}
        >
          <h2 style={{ color: profileCardStyle?.title_color ?? "var(--dark)" }}>
            {profileCardData.title}
          </h2>
          <p
            style={{
              color: profileCardStyle?.description_color ?? "var(--dark)",
            }}
          >
            {profileCardData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
