import ProfileCard from "../components/ProfileCard/ProfileCard";
import SocialCards from "../components/SocialCards/SocialCards";
import Link from "../components/Link/Link";
import { Links } from "../data";
import NavBar from "../components/NavBar/NavBar";
import EndText from "../components/EndText/EndText";

function Home() {
  return (
    <div className="Pages">
      <div className="content-wrapper">
        <ProfileCard />
        <SocialCards />
        <Link ArrayOfLinks={Links.mainLinks} />
      </div>
      <EndText />
      <NavBar />
    </div>
  );
}

export default Home;
