import React from "react";
import Login from "./Login";
import { Box, Center, Img, Button, Heading } from "@chakra-ui/react";
import Slider from "react-slick";



let  prodArr=[
  "https://cdn.modesens.com/umedia/1707018s?w=400",
  "https://cdn.modesens.com/umedia/1707030s?w=400",
  "https://cdn.modesens.com/umedia/1686127s?w=400",
  "https://cdn.modesens.com/umedia/1707018s?w=400",
  "https://cdn.modesens.com/umedia/1707030s?w=400",
  "https://cdn.modesens.com/umedia/1686127s?w=400",

]

function Signup() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Box>
      <Box
        borderRadius={"10px"}
        width="60%"
        m={"auto"}
        mt={"50px"}
     
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Box display={"flex"} gap="40px">
          <Box width={"300px"}>
            <Slider {...settings}>
              {prodArr.map((el) => (
                <Box key={el} width="300px">
                  <Img
                  m={"10px"}
                  ml="15px"
                    width="300px"
                    height={"500px"}
                    src={el}
                    alt="banner"
                  />
                </Box>
              ))}
            </Slider>
          </Box>
          <Box m={"15px 15px"}>
            <Box mt={"60px"}>
              <Box>
                <Heading textAlign={"center"}>Wel<span style={{color:"violet"}}>Come</span></Heading>
              </Box>
              <Heading fontSize={"18px"} textAlign="center" mt={"60px"}>
              Please <span style={{color:"coral"}}>Sign In</span>
              </Heading>
            </Box>
            <Button width="200px" mt="20px" fontFamily={"sans-serif"} fontWeight="bold" backgroundColor={"white"}
              _hover={{background:"black", color:"white"}}
            ><Login/></Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
