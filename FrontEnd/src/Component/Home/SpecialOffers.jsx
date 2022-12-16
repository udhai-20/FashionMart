
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Styles from "./FirstSlider.module.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2.5rem",
        width: "2.5rem",
        marginTop:"-3rem"
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
        marginTop:"-3rem"

      }}
      onClick={onClick}
    />
  );
}

const SpecialOffers = () => {
  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className={Styles.hrDiv}>
        <hr />
        <p>Special Offers</p>
      </div>
    <div
    className={Styles.so}
    >
      <Slider {...settings}>
        <div className={Styles.popUp__3}>
          <div>
               <img  
               src="https://cdn.modesens.com/banner/20221215-modesens-Jomashop-364x484.jpg"
                 alt=""    width="100%"   height="100%"           />
          </div>
          <div>
            <p>Love At First Scent</p>
            <p>Up to 70% off  Designers Perfumes</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
            src="https://cdn.modesens.com/banner/20221011-modesens-sale-364x484_1665469252.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>OMG! So Fresh</p>
            <p>Shop New to Sale Now</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
            src="https://cdn.modesens.com/banner/20221215-modesens-LastMinuteGift-364x484_1670930350.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Last Minute Gift Guide</p>
            <p>Her Most wanted Under $100 </p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
            src="https://cdn.modesens.com/banner/20221121-modesens-1-364x484_1669015278.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Shop With Modesens This Holiday</p>
            <p>Score the best deals across our 500+ Partners </p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220610-modesens-blog-364x484-F.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Less Season and More Sizes</p>
            <p>Blog by SSENCE</p>
            <button>Read Now</button>
          </div>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default SpecialOffers;

