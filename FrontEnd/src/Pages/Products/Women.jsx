import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getDataWomen } from "../../Redux/AppReducer/Product/action";

function Women() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const { women, isLoading, isError } = useSelector((state) => {
    return {
      women: state.productreducer.women,
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(getDataWomen(page, query));
  }, [page, query]);

  const from = "women";
  const headings = "Designer Clothing for Women";
  const details =
    "Shop designer clothing for women with price comparison across 500+ stores in one place. Discover the latest designer clothing for women at ModeSens.";

  return (
    <Box>
      <Product
        data={women}
        setPage={setPage}
        setQuery={setQuery}
        page={page}
        query={query}
        heading={headings}
        details={details}
        category={from}
        loading={isLoading}
        error={isError}
      />
    </Box>
  );
}

export default Women;
