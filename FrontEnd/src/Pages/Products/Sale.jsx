import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getDataSale } from "../../Redux/AppReducer/Product/action";
import PagenotFound from "../../Component/PagenotFound/PagenotFound";

import {
  Box,
  Heading,
  Text,

  Center,
  Img,
} from "@chakra-ui/react";
import Loading from "../Checkout/Loading";



function Sale() {
 

  const dispatch = useDispatch();
  const { sale, isLoading, isError } = useSelector((state) => {
    return {
      sale: state.productreducer.sale,
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(getDataSale());
  }, []);

  const headings = "Holiday Gift Guide | ModeSens";
  const details =
    "ModeSens is your destination for the ultimate Holiday Gift Guide. Shop the best holiday sales only at ModeSens. With more than 500 luxury stores, ModeSens makes it easy for you to find holiday gifts and sales for designers like Gucci, Fendi, Prada, Dolce & Gabbana, Balenciaga and more. Don't miss out on the latest daily deal, and check ModeSens before you buy!";
  const saleproduct =(<Center>
    <Box
      display={"grid"}
      gridTemplateColumns={{
        lg: "repeat(2,1fr)",
        md: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
      }}
      gap="20px"
    >
      {sale.length > 0 &&
        sale?.map((item) => (
          <Box
            key={item._id}
            // width={"100%"}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            cursor={"pointer"}
            _hover={{ background: "rgba(255,255,249)" }}
          >
            <Box
              position={"relative"}
              left="85%"
              top={"10px"}
              _hover={{ color: "red" }}
            ></Box>
            <Center>
              <Img
                width={"542px"}
                height={"271px"}
                src={item.images}
                alt="kids_clothes"
              />
            </Center>
          </Box>
        ))}
    </Box>
  </Center>)
  return (
    <Box>
      <Box>
        {/* product section */}
        <Box mt={"20px"} padding={"15px"}>
          <Center>
            <Box mt={"30px"}>
              <Heading
                padding={"10px"}
                fontSize={"29.96px"}
                fontWeight={"bold"}
                letterSpacing={"0.5"}
                line-height={"40px"}
                textAlign={"left"}
              >
                {headings}
              </Heading>
            </Box>
          </Center>
            <Box>
              {/* details */}
          <Center>
              <Text fontSize={"15.4px"} width="50%" fontWeight={"bold"}>
                {details}
              </Text>
          </Center>
            </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"90%"}
            m={"30px auto"}
          ></Box>
          <Box>
            {/* products */}
            {isLoading ? (<Loading/>) : saleproduct}
            {isError ? (<PagenotFound/>) : saleproduct}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sale;
