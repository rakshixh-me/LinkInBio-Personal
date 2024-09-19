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
    </div>
  );
}

export default App;
