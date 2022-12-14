import { Button } from "@chakra-ui/react";
import React from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
function MoveTop(props) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ArrowUpIcon
        fontSize={"5xl"}
        color="white.800"
        rounded={"full"}
        bg="blackAlpha.600"
        onClick={scrollTop}
      >
        Back to Top
      </ArrowUpIcon>
    </>
  );
}
export default MoveTop;
