import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { getData } from "../../Redux/AppReducer/Product/action";
import {addlikedata} from '../../Redux/AppReducer/LikedProduct/action';
import { Link, useSearchParams } from "react-router-dom";
import {like_data} from "../../Redux/AppReducer/Product/action";

import Pagination from "./Pagination";
import Filter from './Filter';

import {
  Box,
  Heading,
  Text,
  useMediaQuery,
  Center,
  Img,
} from "@chakra-ui/react";

import { useSelector, useDispatch, shallowEqual } from "react-redux";

function Product(props) {
  const [tablet] = useMediaQuery("(max-width: 768px)");
  const [searchparams, setSearchParams] = useSearchParams()
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage]  = useState(1);
  const [total, setTotal] = useState(3);
  const [query, setQuery] = useState("")
  const { data, isLoading, isError } = useSelector((state) => {
    return {
      data: state.productreducer.data,
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

  console.log(data);

  const LikeProduct = (item, id) => {
    const payload ={
      "image": item.image,
      "title": item.title,
      "details": item.details,
      "offers":item.offers || "",
      "price":item.price,
      "quantity":item.quantity,
      "compare": item.compare,
    };
    // console.log(payload)
    dispatch(addlikedata(payload));

    // dispatch(like_data(id));
  };

  const pageChangeHandle=(value)=>{
    // const page_limit = Math.ceil(data.length / 20);
    // setTotal(page_limit);
    setPage(prev => prev + value);

  }


  useEffect(()=>{
    setSearchParams({page})
  },[page])

  useEffect(() => {
    dispatch(getData(page, query));
  }, [page, query]);


  return (
    <Box>
      <Box display={"flex"}>
        {/* sidebar */}
        <Box
          display={tablet ? "none" : "block"}
          border={"1px solid blue"}
          width={"272px"}
          minWidth={"auto"}
          height={"100vh"}
          m="30px 20px"
        >
          <Box width={"272px"} minWidth={"auto"}></Box>
        </Box>
        {/* product section */}
        <Box mt={"30px"} padding={"15px"}>
          <Box mt={"30px"}>
            <Heading
              padding={"10px"}
              fontSize={"25.94px"}
              fontWeight={"500"}
              letterSpacing={"0.5"}
              line-height={"40px"}
              textAlign={"left"}
            >
              Kids' Fashion & Designer Products
            </Heading>
          </Box>
          <Box>
            {/* details */}
            <Text fontSize={"12.9px"} ml="1%" mt={"5px"} mb={"5px"}>
              Shop kids' fashion with price comparison across 500+ stores in one
              place. Discover the latest designer fashion for kids at ModeSens.
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
              <Filter
              
              />
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
          <Box>
            {/* products */}
            {isLoading && <div>Loading...</div>}
            <Center>
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
                {data?.map((item) => (
                  <Box
                    key={item._id}
                    width={"100%"}
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                    cursor={"pointer"}
                    _hover={{ background: "rgba(255,255,249)" }}
                  >
                    <Box
                      position={"relative"}
                      left="85%"
                      top={"10px"}
                      onClick={()=>LikeProduct(item, item._id)}
                    >
                      {like ? (
                        <Icon
                          icon="mdi:cards-heart-outline"
                          fontSize={"22px"}
                          color="red"
                        />
                      ) : (
                        <Icon
                          icon="mdi:cards-heart-outline"
                          fontSize={"22px"}
                        />
                      )}
                    </Box>
                    <Link to={`/singleProduct/${item._id}`} style={{textDecoration:"none"}}>
                      <Center>
                        <Img
                          width={"70%"}
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
            </Center>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
