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
import { useSelector, useDispatch } from "react-redux";
import RecentlyViewed from "../../Component/WomenHomeComp/RecentlyViewed";
import { getData } from "../../Component/Utils/customLocalstorage";
import { TransitionExample } from "./TransitionExample";

import {
  get_failure,
  get_request,
  get_success,
} from "../../Redux/AppReducer/Cart/action";
import Loading from "../Checkout/Loading";
// import ProductDetails from "../SingleProduct/ProductDetails";
import { Link, useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";

function Cart(props) {
  const data = useSelector((state) => state.cartreducer.data);
  const loading = useSelector((state) => state.cartreducer.isLoading);
  const sumprice = data.reduce((sum, ele) => {
    return sum + ele.price * ele.quantity;
  }, 0);
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // this is jquery logic

  // get products
  // get data from cart api
  const token = getData("token");
  console.log("token:", token);

  async function fetchData() {
    const myHeaders = new Headers({
      mode: "no-cors",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
    fetchData();
  }, []);

  // This is for update the data
  const postData = (id, orqty) => {
    console.log(counter);
    const myHeaders = new Headers({
      mode: "no-cors",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });

    fetch(`https://colorful-erin-pike.cyclic.app/cart/update/${id}`, {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify({ quantity: orqty }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry, something went wrong");
        }
      })
      .then((res) => {
        console.log("send successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Incfunc = (id, qty) => {
    setCounter((prev) => prev + 1);
    let Incq = counter + qty;
    postData(id, Incq);

    setTimeout(() => {
      return navigate("/loading");
    }, 900);
    setTimeout(() => {
      return navigate("/cart");
    }, 1000);

    //
  };
  const Decfunc = (id, qty) => {
    setCounter((prev) => prev - 1);
    let Decq = Math.abs(counter - qty);

    postData(id, Decq);

    setTimeout(() => {
      return navigate("/loading");
    }, 1000);
    setTimeout(() => {
      return navigate("/cart");
    }, 1300);
  };
  return (
    <Box mt={"100px"}>
      {" "}
      {loading === true ? (
        <VStack maxW="container.xl" p="10">
          <Loading />
        </VStack>
      ) : (
        <>
          {data.length === 0 ? (
            <Container maxH="" maxW="container.xl" p="10">
              <EmptyCart />
            </Container>
          ) : (
            <Container maxW={"container.lg"} p={10} className="main-box">
              <VStack w="full" justify-content="center" mb={5}>
                <Heading size="md">FASHIONMART CONCIERGE</Heading>
                <Text w="3xl">
                  Let FashionMart determine which store fulfill your request to
                  get the best price for the product you want -{" "}
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

                  {data.length > 0 &&
                    data?.map((ele, i) => (
                      <HStack
                        key={i}
                        spacing={4}
                        border="2px"
                        borderColor="gray.300"
                      >
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
                              disabled={ele.quantity <= 1}
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
                  <Link style={{ textDecoration: "none" }} to="/checkout">
                    <Button
                      w="full"
                      bg="black"
                      color="white"
                      border="4px solid gray"
                    >
                      GO TO Checkout
                    </Button>
                  </Link>
                </VStack>
              </Box>
            </Container>
          )}
        </>
      )}
      <Box marginTop={"25px"}>
        {/* carosul starts here */}
        {!token ? "" : <RecentlyViewed />}
      </Box>
    </Box>
  );
}

export default Cart;
