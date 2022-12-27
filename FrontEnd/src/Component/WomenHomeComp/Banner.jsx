import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import axios  from "axios";
import { useEffect, useState } from "react";
import Styles from "./FirstSlider.module.css";
import Loading from "../../Pages/Checkout/Loading";
import {Box, Img, Center} from "@chakra-ui/react"

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{ ...style,
        display: "block",
        color: "black",
        height: "2.5rem",
        width: "2.5rem",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2.5rem",
        width: "2.5rem",
      }}
      onClick={onClick}
    />
  );
}

// const bannerArr = [
//     "https://modesens.com/banner/14398/getimg/?img=%2Fbanner%2F20221212-modesens-HolidaySale-1140x400-EN_1670831157.jpg",
//     "https://modesens.com/banner/14454/getimg/?img=%2Fbanner%2F20221214-modesens-Prada-1140x400-F-EN.jpg",
//     "https://modesens.com/banner/14477/getimg/?img=%2Fbanner%2F20221213-modesens-Coltorti-1140x400-F-EN.jpg",
//     "https://modesens.com/banner/14509/getimg/?img=%2Fbanner%2F20221215-modesens-Moda-1140x400-F-EN.jpg",
//     "https://modesens.com/banner/14475/getimg/?img=%2Fbanner%2F20221213-modesens-D2-1140x400-EN.jpg",
//     "https://modesens.com/banner/14508/getimg/?img=%2Fbanner%2F20221215-modesens-Mansur-1140x400-F-US-EN.jpg",
//     "https://modesens.com/banner/14480/getimg/?img=%2Fbanner%2F20221208-modesens-LeaningIntoLuxe-1140x400-EN.jpg"
// ]

const Banner = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [banner, setBanner]  = useState([]);

  const getbanner =()=>{
    setLoading(true)
    axios({
      method:"get",
      baseURL:"https://colorful-erin-pike.cyclic.app",
      url:"/home"
    })
    .then((res)=>{
      console.log(res)
      setBanner(res.data);
      setLoading(false)
      setError(false)
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false)
      setError(true)
    })
  }


useEffect(()=>{
  getbanner();
},[])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "20px",marginBottom:"100px" }}>
      {loading && <Loading/>}
      {error && (<Box>
        <Center>
        <Img width="150px" src="https://www.seekpng.com/png/full/360-3605845_dog-holding-paper-in-mouth.png" alt="" />
        </Center>
        </Box>)}
    
    <Slider {...settings} >
        {banner.map((el) => (
            <div className={Styles.popup} key={el}>
                <img className={Styles.bnr_img} src={el.crausel_home} alt="banner" />
            </div>
        ))}
    </Slider>
    </div>
  );
};

export default Banner;
