
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Styles from "./Trending.module.css";

let  prodArr=[
  "https://cdn.modesens.com/umedia/1707018s?w=400",
  "https://cdn.modesens.com/umedia/1707030s?w=400",
  "https://cdn.modesens.com/umedia/1707011s?w=400",
  "https://cdn.modesens.com/umedia/1686127s?w=400",
  "https://cdn.modesens.com/umedia/1707018s?w=400",
  "https://cdn.modesens.com/umedia/1707030s?w=400",
  "https://cdn.modesens.com/umedia/1707011s?w=400",
  "https://cdn.modesens.com/umedia/1686127s?w=400",

]

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

const WomenHome = () => {
  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className={Styles.com_main_div}>
    <div
    className={Styles.Community}
    >
      <Slider {...settings}>
      
        {prodArr.map((el)=> (
          <div key={el} className={Styles.Community_div}>
            <div>
            <img
              // src="https://cdn.modesens.com/banner/20220609-modesens-FPillowBags-364x484-F.jpg"
              src={el}
              alt="prod_comm"
              width="100%"
              height="100%"
            />
            <div className={Styles.qw}>
            <p>Quick View</p>             
            </div>
                            </div>
                            <div className={Styles.desc}>
                               <h3>TITLE</h3>
                               <p>Desc</p>
                               <h3><span>red price off</span>-$100</h3>
                               <p>Compare stores</p>
                            </div>


        </div>
        ))}
    
      </Slider>
    </div>
    <div className={Styles.btn}>
      <button>VIEW ALL</button>
    </div>
    </div>
  );
};

export default WomenHome;

 