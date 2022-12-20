import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getData } from "../../Redux/AppReducer/Product/action";

function Kids() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  
  const { kids, isLoading, isError } = useSelector((state) => {
    return {
      kids: state.productreducer.kids,
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

console.log(kids)

  useEffect(() => {
    dispatch(getData(page, query));
  }, [page, query]);

  const from = "kids";
  const heading = "Kids' Fashion & Designer Products";
  const details =
    "Shop kids' fashion with price comparison across 500+ stores in one place. Discover the latest designer fashion for kids at ModeSens.";
  return (
    <Box>
      <Product
        data={kids}
        setPage={setPage}
        setQuery={setQuery}
        page={page}
        query={query}
        heading={heading}
        details={details}
        category={from}
        loading={isLoading}
        error={isError}
      />
    </Box>
  );
}

export default Kids;
