import ProfileCard from "../components/ProfileCard/ProfileCard";
import SocialCards from "../components/SocialCards/SocialCards";
import NavBar from "../components/NavBar/NavBar";
import EndText from "../components/EndText/EndText";

function Art() {
  return (
    <div className="Pages">
      <div className="content-wrapper">
        <ProfileCard />
        <SocialCards />
      </div>
      <EndText />
      <NavBar />
    </div>
  );
}

export default Art;
