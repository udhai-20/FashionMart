import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getDataMen } from "../../Redux/AppReducer/Product/action";

function Men() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const { men, isLoading, isError } = useSelector((state) => {
    return {
      men: state.productreducer.men,
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(getDataMen(page, query));
  }, [page, query]);

  const from = "men";
  const headings = "Designer Clothing for Men";
  const details =
    "Shop designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.";

  return (
    <Box>
      <Product
        data={men}
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

export default Men;
