import {
  AspectRatio,
  Button,
  Container,
  HStack,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
function EmptyCart() {
  const navigate = useNavigate();
  return (
    <Container maxW={"container.lg"} p={10}>
      <VStack w="full" h="full">
        <Heading size="md">YOUR SHOPPING BAG IS EMPTY</Heading>
        <Text size="2xl">You haven't added any pieces to your bag - yet</Text>

        <Img src="https://cdn.modesens.com/static/img/20190618_nothing.svg" />
      </VStack>

      <HStack mt={31} justifyContent="center">
        <Button color="white" bg="black" onClick={() => navigate("/women")}>
          SHOP WOMEN
        </Button>
        <Button color="white" bg="black" onClick={() => navigate("/men")}>
          SHOP MEN
        </Button>
        <Button color="white" bg="black" onClick={() => navigate("/kids")}>
          SHOP KIDS
        </Button>
      </HStack>
    </Container>
  );
}

export default EmptyCart;
