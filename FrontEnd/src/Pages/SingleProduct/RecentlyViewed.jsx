import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "./RecentlyViewed.css";
import Carousel from "react-multi-carousel";
import axios from "axios";
const responsive_top = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 767 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = [
  {
    id: "1",
    title: "VERACE",
    name: "diamond-quited Ripstop Long Goat",
    offer: "$1499 (40% OFF)",
    price: "$3875",
    compare: "Compare 7 Store",
    image: "https://cdn.modesens.com/product/49347342_2?w=400",
  },
  {
    id: "1",
    title: "VERACE",
    name: "diamond-quited Ripstop Long Goat",
    offer: "$1499 (40% OFF)",
    price: "$3875",
    compare: "Compare 7 Store",
    image: "https://cdn.modesens.com/availability/55981550?w=400",
  },
  {
    id: "1",
    title: "VERACE",
    name: "diamond-quited Ripstop Long Goat",
    offer: "$1499 (40% OFF)",
    price: "$3875",
    compare: "Compare 7 Store",
    image: "https://cdn.modesens.com/product/49347342_2?w=400",
  },
  {
    id: "1",
    title: "VERACE",
    name: "diamond-quited Ripstop Long Goat",
    offer: "$1499 (40% OFF)",
    price: "$3875",
    compare: "Compare 7 Store",
    image: "https://cdn.modesens.com/media/69815750?w=400",
  },
  {
    id: "1",
    title: "VERACE",
    name: "diamond-quited Ripstop Long Goat",
    offer: "$1499 (40% OFF)",
    price: "$3875",
    compare: "Compare 7 Store",
    image: "https://cdn.modesens.com/product/49347342_2?w=400",
  },
  {
    id: "1",
    title: "VERACE",
    name: "diamond-quited Ripstop Long Goat",
    offer: "$1499 (40% OFF)",
    price: "$3875",
    compare: "Compare 7 Store",
    image: "https://cdn.modesens.com/product/49347342_2?w=400",
  },
];
function RecentlyViewed() {
  // const [data, setData] = useState([]);
  // const getProducts_1 = () => {
  //   axios
  //     .get("http://localhost:8080/PRODUCTS1")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // };
  // useEffect(() => {
  //   getProducts_1();
  // }, []);
  return (
    <div>
      {data && (
        <Carousel
          responsive={responsive_top}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          autoPlay={true}
          transitionDuration={1500}
        >
          {data.length > 0 &&
            data.map((el, i) => {
              return (
                <div className="recently_viewed_main" key={i + 1}>
                  <div className="recently_viewed_pic">
                    <img
                      src={el.image}
                      style={{ width: "50%", height: "200px" }}
                    />
                  </div>

                  <div className="recently_viewed_child">
                    <p className="recently_viewed_title">{el.title}</p>
                    <p className="recently_viewed_name">{el.name}</p>
                    <p className="recently_viewed_offer">
                      {el.offer}{" "}
                      <span style={{ color: "black", fontWeight: "600" }}>
                        -{el.price}
                      </span>
                    </p>
                    <p className="recently_viewed_compare">{el.compare}</p>
                  </div>
                </div>
              );
            })}
        </Carousel>
      )}
    </div>
  );
}

export default RecentlyViewed;
