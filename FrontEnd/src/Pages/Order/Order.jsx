import React from "react";
import { useEffect } from "react";
import {getOrderdata} from "../../Redux/AppReducer/Order/action";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
function Order() {
const dispatch = useDispatch();

const {data, isLoading} = useSelector((state)=> {
  return{
    data: state.orderReducer.data,
    isLoading:state.orderReducer.isLoading
  }

}, shallowEqual)

useEffect(()=>{
    dispatch(getOrderdata);
},[])

if (isLoading) {
  return (
    <Container maxW="90%" marginTop={"20px"}>
      <SimpleGrid columns={{ lg: 4, md: 3, base: 1 }} spacing={10}>
        <Skeleton height="200px" />
        <Skeleton height="200px" />
        <Skeleton height="200px" />
        <Skeleton height="200px" />
      </SimpleGrid>
    </Container>
  );
}
return (
  <Container maxW="90%" marginTop={"20px"}>
    {data?.length === 0 && (
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Image
          width={"50%"}
          src="data:image/png;base64,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"
        />
      </Box>
    )}

    <SimpleGrid columns={{ lg: 4, md: 3, base: 1 }} spacing={10}>
      {data?.length > 0 &&
        data.map((el, i) => {
          return (
            <Box
              key={i + 1}
              shadow={"xs"}
              padding=".875rem"
              position={"relative"}
            >
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Image src={el.image} width={"50%"} height="200px" />
              </Box>

              <Flex
                direction={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text
                  fontWeight={"600"}
                  fontSize="1.2rem"
                  marginBottom={"8px"}
                >
                  {el.title}
                </Text>
                <Text color={"gray.400"} marginBottom={"8px"}>
                  {el.details}
                </Text>
                <Text marginBottom={"8px"} color={"red.500"}>
                  {/* $359 (65% OFF){" "} */}
                  <Text as="span" color={"blackAlpha.800"}>
                    {el.price}
                  </Text>
                </Text>

                <Text marginBottom={"8px"} color={"gray.400"}>
                  {el.compare}
                </Text>
              </Flex>
              <Box
                rounded="full"
                width={"30px"}
                position="absolute"
                top={"10px"}
                right="10px"
                color="red.500"
              >
              </Box>
            </Box>
          );
        })}
    </SimpleGrid>
  </Container>
);

 
}

export default Order;
