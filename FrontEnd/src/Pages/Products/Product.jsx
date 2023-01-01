import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { addlikedata } from "../../Redux/AppReducer/LikedProduct/action";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import { addRecentdata } from "../../Redux/AppReducer/recentView/action";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Loading from "../Checkout/Loading";
import PagenotFound from "../../Component/PagenotFound/PagenotFound";

import {
  Box,
  Heading,
  Text,
  useMediaQuery,
  Center,
  Img,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";

function Product({
  data,
  setPage,
  setQuery,
  page,
  query,
  heading,
  details,
  category,
  loading,
  error,
}) {
  const [tablet] = useMediaQuery("(max-width: 768px)");
  const dispatch = useDispatch();
  const [total, setTotal] = useState(3);
  const [searchparams, setSearchParams] = useSearchParams();

  console.log(data);

  const LikeProduct = (item) => {
    const payload = {
      image: item.image,
      title: item.title,
      details: item.details,
      offers: item.offers || "",
      price: item.price,
      quantity: item.quantity,
      compare: item.compare,
    };
    // console.log(payload)
    dispatch(addlikedata(payload));
  };

  const recentViewHandler = (item) => {
    const payload = {
      image: item.image,
      title: item.title,
      details: item.details,
      offers: item.offers || "",
      price: item.price,
      quantity: item.quantity,
      compare: item.compare,
    };
    // console.log(payload)
    dispatch(addRecentdata(payload));
  };

  const pageChangeHandle = (value) => {
    setPage((prev) => prev + value);
  };
  const filterHandler = (e) => {
    const { value } = e.target;

    if (value === "htl") {
      setQuery(-1);
    } else {
      setQuery(1);
    }
  };

  useEffect(() => {
    setSearchParams({ page, query });
  }, [page, query]);

  const productitem = (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2,1fr)",
        }}
        rowGap={"2px"}
        columnGap={"2px"}
      >
        {data.length > 0 &&
          data?.map((item) => (
            <Box
              key={item._id}
              // width={"100%"}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              cursor={"pointer"}
              _hover={{ background: "rgba(255,255,249)" }}
              onClick={() => recentViewHandler(item)}
            >
              <Box
                position={"relative"}
                left="85%"
                top={"10px"}
                _hover={{ color: "red" }}
                onClick={() => LikeProduct(item)}
              >
                <Icon icon="mdi:cards-heart-outline" fontSize={"22px"} />
              </Box>
              <Link
                to={`/singleProduct/${item._id}`}
                state={{ from: category }}
                style={{ textDecoration: "none" }}
              >
                <Center>
                  <Img
                    width={"60%"}
                    height={"250px"}
                    borderRadius="40px"
                    transition={"all 0.5s ease-in-out"}
                    _hover={{ transform: "scale(1.5)" }}
                    src={item.image}
                    alt="kids_clothes"
                  />
                </Center>
                <Box padding={"10px"} mt={"20px"}>
                  <Center>
                    <Heading
                      fontSize={"14px"}
                      fontFamily={"sans-serif"}
                      mt={"5px"}
                      mb={"10px"}
                    >
                      {item.title}
                    </Heading>
                  </Center>
                  <Center>
                    <Text
                      fontSize={"11.9px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"bold"}
                      mb={"10px"}
                      color={"grey"}
                    >
                      {item.details}
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      fontSize={"12.9px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"bold"}
                      mt={"10px"}
                      mb={"10px"}
                    >
                      ${item.price}
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      fontSize={"11.9px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"bold"}
                      mb={"10px"}
                      color={"grey"}
                    >
                      {item.compare}
                    </Text>
                  </Center>
                </Box>
              </Link>
            </Box>
          ))}
      </Box>
    </>
  );

  return (
    <Center>
      <Box display={"flex"} mt={"50px"}>
        {/* sidebar */}
        <Box
          display={tablet ? "none" : "block"}
          width={"20%"}
          minWidth={"auto"}
          m="20px 20px"
        >
          <Box width={"272px"} minWidth={"auto"} mt="150px">
            <Sidebar />
          </Box>
        </Box>
        {/* product section */}
        <Box mt={"20px"} padding={"15px"} width={"80%"}>
          <Box mt={"20px"}>
            <Heading
              padding={"10px"}
              fontSize={"25.94px"}
              fontWeight={"500"}
              letterSpacing={"0.5"}
              line-height={"40px"}
              textAlign={"left"}
            >
              {heading}
            </Heading>
          </Box>
          <Box>
            {/* details */}
            <Text fontSize={"12.9px"} ml="1%" mt={"5px"} mb={"5px"}>
              {details}
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"90%"}
            m={"30px auto"}
          >
            <Box height={"10vh"}>
              {/* filtering */}
              <Filter filterHandler={filterHandler} />
            </Box>
            <Box height={"10vh"}>
              {/* pagination */}
              <Pagination
                pageChangeHandle={pageChangeHandle}
                currentPage={page}
                totalPages={total}
              />
            </Box>
          </Box>
          <Center>
            <Box>
              {/* products */}
              {loading ? <Loading /> : productitem}
              {error ? <PagenotFound /> : productitem}
            </Box>
          </Center>
          <Box height={"10vh"} mt="10">
            {/* pagination */}
            <Pagination
              pageChangeHandle={pageChangeHandle}
              currentPage={page}
              totalPages={total}
            />
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

export default Product;
