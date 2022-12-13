import React,{useEffect,useState} from "react";
import {Box, Button} from "@chakra-ui/react";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import "jquery-ui-dist/jquery-ui";
import $ from "jquery";
import "./Cart.css";
import axios from "axios";
import { TransitionExample } from "./TransitionExample";
function Cart(props) {
  const [allpro,setAllpro] = useState([])
  const getProducts = () =>{
    axios
    .get("http://localhost:8080/products")
    .then((r)=>{
     setAllpro(r.data);
    })
    .catch((e)=>{
        
        console.log(e)
    });
}

  useEffect(()=>{
    var multipleCardCarousel = document.querySelector(
      "#carouselExampleControls"
    );
    // if (window.matchMedia("(min-width: 768px)").matches) {
    //   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    //     interval: false,
    //   });
      var carouselWidth = $(".carousel-inner")[0].scrollWidth;
      var cardWidth = $(".carousel-item").width();
      var scrollPosition = 0;
      $("#carouselExampleControls .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
      $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
    // } else {
    //   $(multipleCardCarousel).addClass("slide");
    // }
    getProducts()
  },[]);
  console.log(allpro);
  return (
    <Box  className="main-box">
      <Box  className="header">
        <h1>FASHIONMART CONCIERGE</h1>
        <p>Let FashionMart determine which store fulfill your request to get the best price for the product you want
- enjoy a worry-free experience with no additional cost to you.</p>
      </Box>
      <Box   className="show-details">
         <Box className="product-details">
          <h4 style={{fontWeight:"bold",fontSize:"18px",marginBottom:"2%"}}>SHOPPING BAG</h4>

         
            {allpro.map((ele)=>(
                <Box  key={ele.id} className="show-the-items">
                  <Box ><img className="product-img" src={ele.image} alt="" /></Box>
                  <Box p="10px">
                 <h3>Brand</h3>
                 <h3>{ele.name}</h3>
                 <h3>Size:{ele.size[0]}</h3>
                 <h3>Quantity:1</h3>
                 {/* alert append here */}
                  </Box>
                  <Box p="10px">
                  <h1 style ={{fontWeight:"bolder",fontSize:"20px",paddingTop:"25%"}}>${ele.price}</h1>
                 </Box>
                 <TransitionExample/>
                </Box>
            ))}
            
           
         </Box>
         <Box  className="show-price">
          <h4 style={{fontWeight:"bold",fontSize:"18px",marginBottom:"3.1%"}}>SUMMARY</h4>
          <Box className="show-price-details">
             <h3>Currency</h3>
             <h3>USD</h3>
             <h3>quantity</h3>
             <h3>price</h3>
            </Box> 
             <Button w="full" bg="black"color="white"border="4px solid gray">GO TO Checkout</Button>
         </Box>
      </Box>
      <Box className="header">
      <h1 >Recently Viewed</h1>
      </Box>
      {/* carosul starts here */}
      <Box>
      <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="card">
                <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."/> </div>
                <div class="card-body">
                    <h5 class="card-title">Card title 1</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="card">
                <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."/> </div>
                <div class="card-body">
                    <h5 class="card-title">Card title 2</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="card">
                <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."/> </div>
                <div class="card-body">
                    <h5 class="card-title">Card title 3</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
       
       
        
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"><FaAngleLeft size={40}/></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span ><FaAngleRight size={40}/></span>
    </button>
</div>
      </Box>
    </Box>
  )
}

export default Cart;
