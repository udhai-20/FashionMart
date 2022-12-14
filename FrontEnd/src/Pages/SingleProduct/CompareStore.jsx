import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
const data = [
  {
    id: "1",
    title: "SENSE",
    offer: "$529 (44% OFF)",
    strikeprice: "$945",
    SIZE: "S",
  },
  {
    id: "1",
    title: "WAVE",
    offer: "$529 (44% OFF)",
    strikeprice: "$700",
    SIZE: "S",
  },
  {
    id: "1",
    title: "SENSE",
    offer: "$529 (44% OFF)",
    strikeprice: "$945",
    SIZE: "S",
  },
  {
    id: "1",
    title: "WAVE",
    offer: "$529 (44% OFF)",
    strikeprice: "$700",
    SIZE: "S",
  },
];

function CompareStore(props) {
  return (
    <Box bg="white.500" marginTop={"25px"}>
      <Text
        marginBottom={{ base: "10px" }}
        fontSize={"1.8rem"}
        fontWeight="600"
        marginLeft={"0"}
        marginBlockStart={"15px"}
      >
        Compare Across 500+ Stores
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
      >
        {data.map((el, i) => {
          return (
            <GridItem
              key={i + 1}
              colSpan={{ base: 2, md: 1 }}
              w="100%"
              shadow={"xs"}
            >
              <Flex justifyContent={"space-between"}>
                <Flex
                  width={{ base: "auto", md: "45%" }}
                  justifyContent="space-evenly"
                >
                  <Box>
                    <Image
                      src="https://cdn.modesens.com/availability/58402097?w=100"
                      height={{ base: "100px", md: "100px" }}
                      marginRight={{ base: "6px", md: "0" }}
                    />
                  </Box>
                  <Box>
                    <Text
                      fontWeight={{ base: "600", md: "600" }}
                      fontSize={{ base: "sm" }}
                      marginBottom={{ base: "5px", md: "10px" }}
                    >
                      {el.title}
                    </Text>
                    <Text
                      fontSize={{ base: "sm" }}
                      display={{ base: "flex" }}
                      fontWeight="600"
                      as="s"
                    >
                      {el.strikeprice}
                    </Text>
                    <Text
                      fontSize={{ base: "sm" }}
                      as="span"
                      display={{ base: "flex" }}
                      color={"red.500"}
                      fontWeight="600"
                    >
                      {el.offer}
                    </Text>
                    <Text
                      color={"gray.500"}
                      fontSize={{ base: "sm" }}
                      marginTop={{ base: "5px", md: "10px" }}
                    >
                      {`Size: ${el.SIZE}`}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  width={"45%"}
                  justifyContent="space-evenly"
                  alignItems={"center"}
                >
                  <Button
                    bg="blackAlpha.800"
                    variant="outline"
                    colorScheme={"whiteAlpha.800"}
                    color="whiteAlpha.800"
                    width={{ base: "auto", md: "45%" }}
                    fontSize={{ base: "sm" }}
                  >
                    VIEW STORE
                  </Button>
                </Flex>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default CompareStore;
