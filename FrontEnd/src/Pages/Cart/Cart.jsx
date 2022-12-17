import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "jquery-ui-dist/jquery-ui";
import $ from "jquery";
import "./Cart.css";

import axios from "axios";
import { TransitionExample } from "./TransitionExample";
import { useDispatch, useSelector } from "react-redux";
import {
  get_failure,
  get_request,
  get_success,
} from "../../Redux/AppReducer/Cart/action";
import Loading from "../Checkout/Loading";
import ProductDetails from "../SingleProduct/ProductDetails";
function Cart(props) {
  const data = useSelector((state) => state.cartreducer.data);
  const loading = useSelector((state) => state.cartreducer.isLoading);
  const sumprice =
    data.length > 0 &&
    data.reduce((sum, ele) => {
      return sum + ele.price * ele.quantity;
    }, 0);
  const [counter, setCounter] = useState(0);
  console.log(counter);

  const dispatch = useDispatch();
  // this is jquery logic

  // get products
  // get data from cart api
  async function getData() {
    const myHeaders = new Headers({
      mode: "no-cors",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzlkODU4NGQ2ZGM2NTkxMzMzNTU0ZDAiLCJpYXQiOjE2NzEyNjc5MjUsImV4cCI6MTY3MTM1NDMyNX0.VpGo1n-po3-9wsQhAIiRnh_sZA2RxsSDcXZj2IODMlY",
    });

    return await fetch("https://colorful-erin-pike.cyclic.app/cart", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => {
        dispatch(get_request());
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((response) => {
        dispatch(get_success(response));
        // setAllproducts(response);
        console.log(response);
      })
      .catch((error) => {
        dispatch(get_failure());
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  // This is for update the data
  const postData = (id, quantity, counter) => {
    const myHeaders = new Headers({
      mode: "no-cors",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzlkODU4NGQ2ZGM2NTkxMzMzNTU0ZDAiLCJpYXQiOjE2NzEyNjc5MjUsImV4cCI6MTY3MTM1NDMyNX0.VpGo1n-po3-9wsQhAIiRnh_sZA2RxsSDcXZj2IODMlY",
    });
    let payload = {
      quantity: quantity + counter,
    };
    fetch(`https://colorful-erin-pike.cyclic.app/cart/update/${id}`, {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry, something went wrong");
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Incfunc = (id, quantity) => {
    setCounter((prev) => prev + 1);

    postData(id, quantity, counter);

    //
  };
  const Decfunc = (id, quantity) => {
    setCounter((prev) => prev - 1);

    postData(id, quantity, counter);
  };
  return (
    <>
      {" "}
      {loading === true ? (
        <VStack maxW="container.xl" p="10">
          <Loading />
        </VStack>
      ) : (
        <Container maxW={"container.lg"} p={10} className="main-box">
          <VStack w="full" justify-content="center" mb={5}>
            <Heading size="md">FASHIONMART CONCIERGE</Heading>
            <Text w="3xl">
              Let FashionMart determine which store fulfill your request to get
              the best price for the product you want -{" "}
            </Text>
            <span>
              enjoy a worry-free experience with no additional cost to you.
            </span>
          </VStack>

          <Box className="show-details">
            <Box className="product-details">
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "2%",
                }}
              >
                SHOPPING BAG
              </h4>

              {data.map((ele, i) => (
                <HStack key={i} spacing={4} border="4px" borderColor="gray.300">
                  <AspectRatio ml={5} p={5} ratio={1} w={24}>
                    <Img className="product-img" src={ele.image} alt="" />
                  </AspectRatio>

                  <VStack alignItems="left" p="10px">
                    <Heading size="sm">{ele.title}</Heading>
                    <Text>{ele.details}</Text>
                    {/* <h3>Size:{ele.}</h3> */}
                    {/* <h3>Quantity:{ele.quantity}</h3> */}
                    <HStack>
                      <Button
                        onClick={() => Incfunc(ele._id, ele.quantity)}
                        size="xs"
                      >
                        +
                      </Button>
                      <Text>{ele.quantity}</Text>
                      <Button
                        onClick={() => Decfunc(ele._id, ele.quantity)}
                        size="xs"
                      >
                        -
                      </Button>
                    </HStack>
                    {/* alert append here */}
                  </VStack>
                  <Heading size="md" p={2}>
                    ${ele.price * ele.quantity}.00
                  </Heading>
                  <VStack mt="-10px" alignItems="end">
                    <TransitionExample id={ele._id} />
                  </VStack>
                </HStack>
              ))}
            </Box>
            <VStack alignItems="left" p={0}>
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "3.1%",
                }}
              >
                SUMMARY
              </h4>
              <VStack
                p={4}
                border="4px"
                borderColor="gray.300"
                alignItems="left"
              >
                <HStack spacing={10}>
                  <Heading size="sm">Currency</Heading>
                  <Heading size="sm">USD</Heading>
                </HStack>
                <HStack spacing={10}>
                  <Heading size="sm">{data.length}items</Heading>
                  <Heading size="sm">${sumprice.toFixed(2)}</Heading>
                </HStack>
              </VStack>
              <a
                style={{ textDecoration: "none" }}
                href="http://localhost:3000/checkout"
              >
                <Button
                  w="full"
                  bg="black"
                  color="white"
                  border="4px solid gray"
                >
                  GO TO Checkout
                </Button>
              </a>
            </VStack>
          </Box>
          <VStack>
            <Heading mt={3} size="md">
              Recently Viewed
            </Heading>
          </VStack>

          {/* carosul starts here */}
          <ProductDetails />
        </Container>
      )}
    </>
  );
}

export default Cart;
