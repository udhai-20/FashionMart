
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Styles from "./Community.module.css";

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

const Community = () => {
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
         <div className={Styles.hrDiv}>
        <hr />
        <p>Community</p>
      </div>
    <div
    className={Styles.Community}
    >
      <Slider {...settings}>
      
        {prodArr.map((el)=> (
          <div key={el} className={Styles.Community_div}>
            <img
              // src="https://cdn.modesens.com/banner/20220609-modesens-FPillowBags-364x484-F.jpg"
              src={el}
              alt="prod_comm"
              width="100%"
              height="100%"
            />
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

export default Community;

  /* <div className={Styles.Community}>
          <div>
               <img  src="https://cdn.modesens.com/banner/20220531-modesens-Sale-364x484.jpg"   alt=""    width="100%"   height="100%"           />
          </div>
        </div> */

           /* <div className={Styles.Community}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220615-modesens-SummerFashionGuide-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className={Styles.Community}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220610-modesens-blog-364x484-F.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div> */

