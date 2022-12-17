import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ReactLoading from "react-loading";
function Loading() {
  return (
    <VStack maxW="full" justifyContent="center" h="full" p={10}>
      <ReactLoading type={"bars"} color={"blue"} height={200} width={200} />
    </VStack>
  );
}

export default Loading;
