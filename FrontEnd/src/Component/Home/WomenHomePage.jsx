import Bottom from "../Footer/Bottom";
// import Login from './Components/Login';
// import SignUpPopUp from "./PopUp/SignUpPopUp"
// import SignupPopup from './PopUp/SignUpPopUp';
// import Login from './Login/Login';
import Featured from "../WomenHomeComp/Featured";
import SpecialOffers from "../WomenHomeComp/SpecialOffers";
import Banner from "../WomenHomeComp/Banner";
import ShopWomen from "../WomenHomeComp/ShopWomen";
import Community from "../WomenHomeComp/Community";
import Trending from "../WomenHomeComp/Trending";
const WomenHomePage = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <ShopWomen />
      <Trending />
      <SpecialOffers />
      <Trending />
      <Community />
      <Bottom />
    </div>
  );
};

export default WomenHomePage;
