import React from "react";
import { Button, Box } from "@chakra-ui/react";

function Pagination({ pageChangeHandle, currentPage, totalPages }) {
  const prev = (
    <>
      <Button background={"none"} border="none"   width="0px"
      height={"30px"} disabled={currentPage === 1} onClick={() => pageChangeHandle(-1)}>
        ←
      </Button>
    </>
  );
  const current = (
    <>
      <Button 
        width="20px"
        height={"30px"}
      border="none"
      background={"none"}
      fontWeight="bold"
      >
        {currentPage}
      </Button>
    </>
  );
  const next = (
    <>
      <Button
      width="0px"
      height={"30px"}
      border="none"
      background={"none"}
        disabled={currentPage === totalPages}
        onClick={() => pageChangeHandle(1)}
      >
        →
      </Button>
    </>
  );
  return (
    <>
      {prev}
      <span>{current}</span>
      {next}
    </>
  );
}

export default Pagination;
