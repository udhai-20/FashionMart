import Bottom from './Footer/Bottom';
// import Login from './Components/Login';
// import SignUpPopUp from "./PopUp/SignUpPopUp"
// import SignupPopup from './PopUp/SignUpPopUp';
// import Login from './Login/Login';
import Featured from './Home/Featured';
import SpecialOffers from './Home/SpecialOffers';
import Banner from './Home/Banner';
import ShopWomen from './Home/ShopWomen';
import Community from './Home/Community';
import Trending from "./Home/Trending"
const HomePage = () => {
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

export default HomePage;
