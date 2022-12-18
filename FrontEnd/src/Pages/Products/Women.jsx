import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getDataWomen } from "../../Redux/AppReducer/Product/action";

function Women() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
<<<<<<< HEAD
  const { kids, isLoading, isError } = useSelector((state) => {
    return {
      kids: state.productreducer.kids,
=======
  const { women, isLoading, isError } = useSelector((state) => {
    return {
      women: state.productreducer.women,
>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

  useEffect(() => {
<<<<<<< HEAD
    dispatch(getData(page, query));
  }, [page, query]);
  const from = "womens";
=======
    dispatch(getDataWomen(page, query));
  }, [page, query]);

  const from = "women";
>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
  const headings = "Designer Clothing for Women";
  const details =
    "Shop designer clothing for women with price comparison across 500+ stores in one place. Discover the latest designer clothing for women at ModeSens.";

  return (
    <Box>
      <Product
<<<<<<< HEAD
        data={kids}
        catagory={from}
=======
        data={women}
>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
        setPage={setPage}
        setQuery={setQuery}
        page={page}
        query={query}
<<<<<<< HEAD
=======
        heading={headings}
        details={details}
        category={from}
>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
      />
    </Box>
  );
}

export default Women;
