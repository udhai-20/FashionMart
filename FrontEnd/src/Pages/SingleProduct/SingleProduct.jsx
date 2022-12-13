import React from "react";
import {
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import Carousels from "./Carousel";
function SingleProduct(props) {
  return (
    <Container maxW="85%" marginTop={"20px"} bg="white.500">
      <Text>MODESENS / DESIGNERS / PALM ANGELS / MEN / CLOTHING / JACKETS</Text>
      <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
        <GridItem colSpan={{ base: 2, md: 1 }} w="100%" bg="blue.500">
          <Image
            width={"100%"}
            height="200px"
            src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }} w="100%">
          <Text marginBottom={"15px"} fontSize={"1.14rem"} fontWeight="600">
            PALM ANGELS
          </Text>
          <Text marginBottom={"8px"} color={"gray.600"}>
            Blue & White Classic Track Jacket
          </Text>
          <Text as="s"> $379</Text>
          <Text as={"span"} color="red.500">
            $303 (20% OFF){" "}
            <Text
              as={"span"}
              cursor="pointer"
              color="gray.300"
              _hover={{
                color: "gray.600",
              }}
            >
              Set Alert
            </Text>
          </Text>
          <Text marginTop={"13px"}>Shop From 8 Stores</Text>
          <Text marginTop={"13px"} marginBottom={"8px"}>
            Earn up to 565 points when you buy.
          </Text>
        </GridItem>

        <GridItem colSpan={{ base: 2, lg: 1 }} w="100%" bg="blue.500">
          <Text>Shop With ModeSens Concierge</Text>
          <Text>
            ModeSens Concierge helps you shop 500+ stores in one place. A
            premium benefit exclusively reserved for Silver and above members.
            Learn more
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }} w="100%" h="10" bg="blue.500">
          <Text>Shop With ModeSens Concierge</Text>
          <Flex>
            <Button colorScheme="teal" variant="outline">
              Select The Size
            </Button>
            <Button>ADD TO BAG</Button>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default SingleProduct;
