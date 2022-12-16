import React from "react";
import { Button, Box } from "@chakra-ui/react";

function Pagination({ pageChangeHandle, currentPage, totalPages }) {
  const prev = (
    <>
      <Button width="15px" height={"20px"} disabled={currentPage === 1} onClick={() => pageChangeHandle(-1)}>
        ←
      </Button>
    </>
  );
  const current = (
    <>
      <Button 
      background={"none"}
      width="15px" height={"20px"} onClick={pageChangeHandle}>
        <span>{currentPage}</span>
      </Button>
    </>
  );
  const next = (
    <>
      <Button
      width="15px" height={"20px"}
        disabled={currentPage === totalPages}
        onClick={() => pageChangeHandle(1)}
      >
        <span> →</span>
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
