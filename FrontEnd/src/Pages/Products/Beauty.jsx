import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getDataBeauty } from "../../Redux/AppReducer/Product/action";

function Beauty() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
<<<<<<< HEAD
  const { kids, isLoading, isError } = useSelector((state) => {
    return {
      kids: state.productreducer.kids,
=======
  const { beauty, isLoading, isError } = useSelector((state) => {
    return {
      beauty: state.productreducer.beauty,
>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
      isLoading: state.productreducer.isLoading,
      isError: state.productreducer.isError,
    };
  }, shallowEqual);

  useEffect(() => {
<<<<<<< HEAD
    dispatch(getData(page, query));
  }, [page, query]);
=======
    dispatch(getDataBeauty(page, query));
  }, [page, query]);

>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
  const from = "beauty";
  const headings = "Designer Beauty for Women";
  const details =
    "Designer Beauty for Women Shop designer beauty for women with price comparison across 500+ stores in one place. Discover the latest designer beauty for women at ModeSens.";

  return (
    <Box>
      <Product
<<<<<<< HEAD
        mens={from}
        data={kids}
        setPage={setPage}
        setQuery={setQuery}
        page={page}
        catagory={from}
        query={query}
=======
        data={beauty}
        setPage={setPage}
        setQuery={setQuery}
        page={page}
        query={query}
        heading={headings}
        details={details}
        category={from}
>>>>>>> 642e5b7d8cee8337f0c465b67fe68f041528d41b
      />
    </Box>
  );
}

export default Beauty;
