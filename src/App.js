import ProfileCard from "./components/ProfileCard/ProfileCard";
import SocialCards from "./components/SocialCards/SocialCards";
import Link from "./components/Link/Link";
import { Links } from "./data";

function App() {
  return (
    <div className="App">
      <ProfileCard />
      <SocialCards />
      <Link ArrayOfLinks={Links.mainLinks} />
      <a
        href="https://github.com/rakshixh"
        target="_blank"
        rel="noreferrer"
        className="endText"
        style={{ animation: "fadeInEffect 2s ease-in-out forwards" }}
      >
        <p className="endText">rakshixh</p>
      </a>
    </div>
  );
}

export default App;
