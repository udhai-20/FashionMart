import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CompareStore from "./CompareStore";
import ProductDetails from "./ProductDetails";
import RecentlyViewed from "./RecentlyViewed";
import axios from "axios";
import MoveTop from "./MoveTop";

const data_1 = [
  {
    title: "WAVE",
    details: "Blue & White Classic Track Jacket",
    offer: "$529 (44% OFF)",
    price: "$700",
    SIZE: "S",
    quantity: 1,
    compare: "sdfd",
    image: "https://cdn.modesens.com/product/49347342_2?w=400",
  },
];

function SingleProduct(props) {
  const { id } = useParams();

  // get req for single page
  const fet_data = () => {
    axios
      .get(`${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err");
      });
  };
  //cart page post request for dynamic data
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzlhYjM3YjRhNzFjODRiMGY0ZGZmNzIiLCJpYXQiOjE2NzEwODI5MDEsImV4cCI6MTY3MTE2OTMwMX0.z5psuF4kxgrQxLgQt9q20Bbujw9-3bUrm48v8fuQI6s";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, //token from local storage
  };
  const handleStoreData = (el) => {
    console.log(el);
    axios
      .post(`https://dead-ruby-goose-kit.cyclic.app/cart/addtocart`, el, {
        headers,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err");
      });
  };
  return (
    <Container maxW="85%" marginTop={"20px"} bg="white.500">
      <Text marginBottom={{ base: "10px" }}>
        MODESENS / DESIGNERS / PALM ANGELS / MEN / CLOTHING / JACKETS
      </Text>
      {data_1.map((el, i) => {
        return (
          <Grid
            key={i + 1}
            templateColumns={"repeat(2, 1fr)"}
            gap={6}
            shadow="xs"
            padding={".5rem"}
          >
            <GridItem colSpan={{ base: 2, md: 1 }} w="100%">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Image width={"40%"} height="200px" src={el.image} />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }} w="100%">
              <Text marginBottom={"15px"} fontSize={"1.14rem"} fontWeight="600">
                {el.title}
              </Text>
              <Text marginBottom={"8px"} color={"gray.600"}>
                {el.name}
              </Text>
              <Text as="s"> {el.price}</Text>
              <Text as={"span"} color="red.500">
                -{el.offer}
                <Text
                  as={"span"}
                  cursor="pointer"
                  color="gray.300"
                  _hover={{
                    color: "gray.600",
                  }}
                >
                  -Set Alert
                </Text>
              </Text>
              <Text marginTop={"13px"} fontWeight="600">
                Shop From 8 Stores
              </Text>
              <Text marginTop={"13px"} marginBottom={"8px"}>
                Earn up to 565 points when you buy.
              </Text>
            </GridItem>
            {/* ///////////////////static data */}
            <GridItem colSpan={{ base: 2, lg: 1 }} w="100%">
              <Text fontWeight="600" fontSize={"1.8rem"}>
                Shop With ModeSens Concierge
              </Text>
              <Text marginTop="10px">
                ModeSens Concierge helps you shop 500+ stores in one place. A
                premium benefit exclusively reserved for Silver and above
                members. Learn more
              </Text>
            </GridItem>
            {/* dynamic price need to provide here */}
            <GridItem colSpan={{ base: 2, lg: 1 }} w="100%">
              <Text as="span" fontWeight="600">
                Estimated Price:{" "}
              </Text>
              <Text as={"span"} color="red.300">
                {el.offer} -
                <Text as={"span"} color="blackAlpha.800">
                  {el.price}
                </Text>
              </Text>
              <Flex justifyContent={"space-between"} marginTop="10px">
                <Select border={"2px"} width={"45%"} placeholder="SELECT SIZE">
                  <option value="option1">S</option>
                  <option value="option2">M</option>
                  <option value="option3">L</option>
                  <option value="option3">XL</option>
                  <option value="option3">2XL</option>
                </Select>
                <Button
                  bg="blackAlpha.800"
                  variant="outline"
                  colorScheme={"whiteAlpha.800"}
                  color="whiteAlpha.800"
                  width={"45%"}
                  onClick={() => handleStoreData(el)}
                >
                  ADD TO BAG
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        );
      })}

      <CompareStore />
      <Text
        marginTop={"20px"}
        marginBottom={"20px"}
        fontWeight="600"
        fontSize={"1.8rem"}
      >
        Product Details
      </Text>
      <ProductDetails />
      <Text
        marginTop={"20px"}
        marginBottom={"20px"}
        fontWeight="600"
        fontSize={"1.8rem"}
      >
        Recently Viewed
      </Text>
      <RecentlyViewed />
      {/* //movetop */}
      <Box marginTop={"40px"} display="flex" justifyContent={"center"}>
        <MoveTop />
      </Box>
    </Container>
  );
}

export default SingleProduct;
