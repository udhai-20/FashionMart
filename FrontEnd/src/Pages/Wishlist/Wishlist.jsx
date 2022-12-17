import React, { useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getlikeDeletedata,
  getlikedata,
} from "../../Redux/AppReducer/LikedProduct/action";

const usertoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzlkODU4NGQ2ZGM2NTkxMzMzNTU0ZDAiLCJpYXQiOjE2NzEyNjc5MjUsImV4cCI6MTY3MTM1NDMyNX0.VpGo1n-po3-9wsQhAIiRnh_sZA2RxsSDcXZj2IODMlY";
function Wishlist(props) {
  const dispatch = useDispatch();
  const likeData = useSelector((state) => state.LikedProductreducer.data);
  console.log("likeData:", likeData);
  const showData = () => {
    dispatch(getlikedata());
  };
  const handleDelete = (id) => {
    console.log(id);
    dispatch(getlikeDeletedata(id, usertoken));
  };
  useEffect(() => {
    showData();
    return () => showData();
  }, []);

  return (
    <Container maxW="90%" marginTop={"20px"}>
      <SimpleGrid columns={{ lg: 4, md: 3, base: 1 }} spacing={10}>
        {likeData.length > 0 &&
          likeData.map((el, i) => {
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
                    Rag&Bone
                  </Text>
                  <Text color={"gray.400"} marginBottom={"8px"}>
                    Women's Hazel High Heel Ankle Boots
                  </Text>
                  <Text marginBottom={"8px"} color={"red.500"}>
                    $359 (65% OFF){" "}
                    <Text as="span" color={"blackAlpha.800"}>
                      -$495
                    </Text>
                  </Text>

                  <Text marginBottom={"8px"} color={"gray.400"}>
                    1Store
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
                  <AiFillHeart
                    onClick={() => handleDelete(el._id)}
                    fontSize={"2.2rem"}
                  />
                </Box>
              </Box>
            );
          })}
      </SimpleGrid>
    </Container>
  );
}

export default Wishlist;
