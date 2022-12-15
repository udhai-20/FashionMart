import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductDetails.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = [
  {
    id: "1",
    title: "PALM ANGELS STAR KNITWEAR",
    image:
      "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg",
    description:
      "Inspired by Francesco Ragazzi's photographs of the Southern Californian skate culture, Palm Angels re-interprets the famous iconography into contemporary menswear. The brand's casual separates, reminiscent of all-American style and street culture, will bring a sense of dynamism to the wardrobe.",
    product: "Product details provided by Oluxury-Purchase Now",
  },
  {
    id: "2",
    title: "PALM ANGELS STAR KNITWEAR",
    image: "https://cdn.modesens.com/availability/58458201?W=100",
    description:
      "Inspired by Francesco Ragazzi's photographs of the Southern Californian skate culture, Palm Angels re-interprets the famous iconography into contemporary menswear. The brand's casual separates, reminiscent of all-American style and street culture, will bring a sense of dynamism to the wardrobe.",
    product: "Product details provided by Oluxury-Purchase Now",
  },
  {
    id: "3",
    title: "PALM ANGELS STAR KNITWEAR",
    image: "https://cdn.modesens.com/availability/58402097?W=100",
    description:
      "Inspired by Francesco Ragazzi's photographs of the Southern Californian skate culture, Palm Angels re-interprets the famous iconography into contemporary menswear. The brand's casual separates, reminiscent of all-American style and street culture, will bring a sense of dynamism to the wardrobe.",
    product: "Product details provided by Oluxury-Purchase Now",
  },
];
function ProductDetails(props) {
  return (
    <Carousel
      zIndex={1}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      responsive={responsive}
      focusOnSelect={false}
      infinite
      autoPlay
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {data.map((el, i) => {
        return (
          <div className="product_detail_main" key={i + 1}>
            <div className="product_detail_image">
              <img src={el.image} />
            </div>
            <div className="product_detail_child">
              <p className="product_detail_headers">{el.title}</p>
              <p className="product_detail_descripton">{el.description}</p>
              <p className="product_detail_purchese">{el.product}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default ProductDetails;
