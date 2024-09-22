import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SocialCards from "../components/SocialCards/SocialCards";
import Link from "../components/Link/Link";
import { HomeLinks, ArtLinks, PhotoLinks } from "../data";
import NavBar from "../components/NavBar/NavBar";
import EndText from "../components/EndText/EndText";

function Home() {
  const [selectedNav, setSelectedNav] = useState("dev");

  const handleNavClick = (value) => {
    console.log(value);
    setSelectedNav(value);
  };

  const renderLinks = () => {
    if (selectedNav === "dev") {
      return <Link ArrayOfLinks={HomeLinks.mainLinks} />;
    } else if (selectedNav === "art") {
      return <Link ArrayOfLinks={ArtLinks.mainLinks} />;
    } else if (selectedNav === "photo") {
      return <Link ArrayOfLinks={PhotoLinks.mainLinks} />;
    }
    return null;
  };

  return (
    <div className="Pages">
      <div className="content-wrapper">
        <ProfileCard />
        <SocialCards />
        {renderLinks()}
      </div>
      <EndText />
      <NavBar onNavClick={handleNavClick} />
    </div>
  );
}

export default Home;
