import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Skeleton,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import CompareStore from "./CompareStore";
import ProductDetails from "./ProductDetails";
import RecentlyViewed from "./RecentlyViewed";
import MoveTop from "./MoveTop";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addtobasg,
  getsingleData,
  getsingleData_beauty,
  getsingleData_kids,
  getsingleData_mens,
  getsingleData_women,
} from "../../Redux/AppReducer/SingleProduct/action";
import { getData } from "../../Component/Utils/customLocalstorage";
// import RecentlyViewed from "../../Component/WomenHomeComp/RecentlyViewed";
import Magnifier from './Magnifier';

function SingleProduct(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const toast = useToast();
  const [size, setSize] = useState("");
  const [data, setData] = useState({});
  const { from } = location.state;
  // console.log("from:", from);
  // var from = "beauty";
  let loading = useSelector((state) => state.singleproductreducer.isLoading);
  let kids = useSelector((state) => state.singleproductreducer?.kiddata);
  let mens = useSelector((state) => state.singleproductreducer?.mendata);
  let womens = useSelector((state) => state.singleproductreducer?.womendata);
  let beauty = useSelector((state) => state.singleproductreducer?.beautydata);
  let allproduct = useSelector((state) => state.singleproductreducer);
  console.log("allproduct:", allproduct);
  if (from == "kids") {
    var product = kids;
  } else if (from == "women") {
    var product = womens;
  } else if (from == "men") {
    var product = mens;
  } else if (from == "beauty") {
    var product = beauty;
  }
  // console.log("find:", find);
  // console.log("  product:", product);
  // console.log(" kids:", kids);
  // console.log("  beauty:", beauty);
  // console.log("product:", product);
  const { id } = useParams();
  // console.log("id:", id);
  const usertoken = getData("token");

  const token = getData("token");

  // get req for single page
  const fet_data_kids = () => {
    dispatch(getsingleData_kids(id, usertoken));
  };
  const fet_data_women = () => {
    dispatch(getsingleData_women(id, usertoken));
  };
  const fet_data_mens = () => {
    dispatch(getsingleData_mens(id, usertoken));
  };
  const fet_data_beauty = () => {
    dispatch(getsingleData_beauty(id, usertoken));
  };
  //cart page post request for dynamic data
  const handleStoreData = (el) => {
    // console.log("xhexk", size);
    // setData({ ...el, Size: size });
    if (size == "") {
      toast({
        position: "top",
        title: "Please Select the Size",
        description: "And Add to Bag",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    } else {
      ///in kids section u need to include the size schema
      // console.log("data;:", data);
      dispatch(addtobasg(el, usertoken));

      toast({
        position: "top",
        title: "Item Added successful",
        description: "Continue For Shopping",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      navigate("/cart");
    }
    // console.log(el);
  };
  useEffect(() => {
    fet_data_kids();
    // fet_data_women();
    // fet_data_mens();
    // fet_data_beauty();
  }, []);
  useEffect(() => {
    fet_data_women();
  }, []);
  useEffect(() => {
    fet_data_mens();
  }, []);
  useEffect(() => {
    fet_data_beauty();
  }, []);
  console.log("loading:", loading);
  if (loading) {
    return (
      <Grid templateColumns={"repeat(2, 1fr)"} gap={6} padding={".5rem"}>
        <GridItem colSpan={{ base: 2, md: 1 }} w="100%">
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            maxW="85%"
            padding="6"
            bg="white"
          >
            <Skeleton height="200px" w={"40%"} />
          </Box>
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          maxW="85%"
          padding="6"
          bg="white"
          colSpan={{ base: 2, md: 1 }}
          w="100%"
        >
          <Skeleton height="200px" w={"40%"} />
        </GridItem>
      </Grid>
    );
  }
  return (
    <Container maxW="85%" marginTop={"20px"} bg="white.500" mt={"100px"}>
      <Text marginBottom={{ base: "10px" }}>
        MODESENS / DESIGNERS / PALM ANGELS / {from}
      </Text>
      {product && (
        <Grid
          templateColumns={"repeat(2, 1fr)"}
          gap={6}
          shadow="xs"
          padding={".5rem"}
        >
          <GridItem colSpan={{ base: 2, md: 1 }} w="100%">
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              {/* <Image width={"40%"} height="300px" src={product.image} /> */}
              <Magnifier props = {product.image}/>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }} w="100%">
            <Text marginBottom={"15px"} fontSize={"1.14rem"} fontWeight="600">
              {product.title}
            </Text>
            <Text marginBottom={"8px"} color={"gray.600"}>
              {product.name}
            </Text>
            <Text fontWeight={"600"} as={"span"}>
              ${product.price}
            </Text>
            <Text as={"span"} color="red.500">
              {product.offer}
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
              {product.compare}
            </Text>
            <Text marginTop={"13px"} marginBottom={"8px"}>
              {product.details}
            </Text>
          </GridItem>
          {/* ///////////////////static data */}
          <GridItem colSpan={{ base: 2, lg: 1 }} w="100%">
            <Text fontWeight="600" fontSize={"1.8rem"}>
              Shop With ModeSens Concierge
            </Text>
            <Text marginTop="10px">
              ModeSens Concierge helps you shop 500+ stores in one place. A
              premium benefit exclusively reserved for Silver and above members.
              Learn more
            </Text>
          </GridItem>
          {/* dynamic price need to provide here */}
          <GridItem colSpan={{ base: 2, lg: 1 }} w="100%">
            <Text as="span" fontWeight="600">
              Estimated Price:{" "}
            </Text>
            <Text as={"span"} color="red.300">
              {/* {product.offer} - */}
              <Text as={"span"} fontWeight={"600"} color="blackAlpha.800">
                ${product.price}
              </Text>
            </Text>
            <Flex
              justifyContent={"space-between"}
              onChange={(e) => setSize(e.target.value)}
              marginTop="10px"
            >
              <Select border={"2px"} width={"45%"} placeholder="SELECT SIZE">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
              </Select>
              <Button
                bg="blackAlpha.800"
                variant="outline"
                colorScheme={"whiteAlpha.800"}
                color="whiteAlpha.800"
                width={"45%"}
                onClick={() => handleStoreData(product)}
              >
                ADD TO BAG
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      )}
      ;
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
      <Box>
        {/* {!token ? "" : <RecentlyViewed />} */}
        <RecentlyViewed />
      </Box>
      {/* //movetop */}
      <Box marginTop={"40px"} display="flex" justifyContent={"center"}>
        <MoveTop />
      </Box>
    </Container>
  );
}

export default SingleProduct;
