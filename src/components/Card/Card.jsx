import React from "react";
import CardCSS from "./Card.module.css";
import rakshixh from "../../assets/rakshixhDev.png";

function Card() {
  return (
    <div className={CardCSS.card}>
      <div className={CardCSS.imgDivContentDiv}>
        <img src={rakshixh} alt="rakshixh" className={CardCSS.img} />
        <div className={CardCSS.contentDiv}>
          <h2>Rakshith Acharya</h2>
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
