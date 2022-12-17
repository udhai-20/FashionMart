import Bottom from './Footer/Bottom';
// import Login from './Components/Login';
// import SignUpPopUp from "./PopUp/SignUpPopUp"
// import SignupPopup from './PopUp/SignUpPopUp';
// import Login from './Login/Login';
import Featured from './MenHomeComp/Featured';
import SpecialOffers from './MenHomeComp/SpecialOffers';
import Banner from './MenHomeComp/Banner';
import ShopWomen from './MenHomeComp/ShopWomen';
import Community from './MenHomeComp/Community';
import Trending from "./MenHomeComp/Trending"
const MenHomePage = () => {
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

export default MenHomePage;
