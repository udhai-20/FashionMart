import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getDataMen } from "../../Redux/AppReducer/Product/action";

function Men() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
<<<<<<< HEAD
  const { kids, isLoading, isError } = useSelector((state) => {
    return {
      kids: state.productreducer.kids,
=======
  const { men, isLoading, isError } = useSelector((state) => {
    return {
      men: state.productreducer.men,
>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

  useEffect(() => {
<<<<<<< HEAD
    dispatch(getData(page, query));
  }, [page, query]);
  const from = "mens";
=======
    dispatch(getDataMen(page, query));
  }, [page, query]);

  const from = "men";
>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
  const headings = "Designer Clothing for Men";
  const details =
    "Shop designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.";

  return (
    <Box>
      <Product
<<<<<<< HEAD
        data={kids}
        catagory={from}
=======
        data={men}
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

export default Men;
