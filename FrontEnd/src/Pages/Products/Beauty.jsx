import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getDataBeauty } from "../../Redux/AppReducer/Product/action";

function Beauty() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const { beauty, isLoading, isError } = useSelector((state) => {
    return {
      beauty: state.productreducer.beauty,
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

 

  useEffect(() => {
    dispatch(getDataBeauty(page, query));
  }, [page, query]);

  const from = "beauty";
  const headings = "Designer Beauty for Women";
  const details =
    "Designer Beauty for Women Shop designer beauty for women with price comparison across 500+ stores in one place. Discover the latest designer beauty for women at ModeSens.";

  return (
    <Box>
      <Product
        data={beauty}
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

export default Beauty;
