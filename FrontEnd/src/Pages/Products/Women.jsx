import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getData } from "../../Redux/AppReducer/Product/action";

function Women() {
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

  useEffect(() => {
    dispatch(getData(page, query));
  }, [page, query]);
  const from = "womens";
  const headings = "Designer Clothing for Women";
  const details =
    "Shop designer clothing for women with price comparison across 500+ stores in one place. Discover the latest designer clothing for women at ModeSens.";

  return (
    <Box>
      <Product
        data={kids}
        catagory={from}
        setPage={setPage}
        setQuery={setQuery}
        page={page}
        query={query}
      />
    </Box>
  );
}

export default Women;