import Bottom from "../Footer/Bottom";
import { getData } from "../Utils/customLocalstorage";
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
import RecentlyViewed from "../WomenHomeComp/RecentlyViewed";
const WomenHomePage = () => {
  const token = getData("token");

  return (
    <div>
      <Banner />
      <Featured />
      <ShopWomen />
      <Trending />
      <SpecialOffers />
      {
        !token?"":<RecentlyViewed />
      }
      
      <Community />
      <Bottom />
    </div>
  );
};

export default WomenHomePage;
