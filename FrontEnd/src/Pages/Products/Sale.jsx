import React, { useState, useEffect } from 'react'
import Product from './Product'
import { Box } from '@chakra-ui/react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getData } from "../../Redux/AppReducer/Product/action";

function Sale() {
    const dispatch = useDispatch();
    const [page, setPage]  = useState(1);
    const [query, setQuery] = useState("")
    const { kids, isLoading, isError } = useSelector((state) => {
        return {
          kids: state.productreducer.kids,
          isLoading: state.productreducer.isLoading,
          isError: state.productreducer.isError,
        }
      }, shallowEqual);

      useEffect(() => {
        dispatch(getData(page, query));
      }, [page, query]);
    
      const headings ="Holiday Gift Guide | ModeSens"
      const details = "ModeSens is your destination for the ultimate Holiday Gift Guide. Shop the best holiday sales only at ModeSens. With more than 500 luxury stores, ModeSens makes it easy for you to find holiday gifts and sales for designers like Gucci, Fendi, Prada, Dolce & Gabbana, Balenciaga and more. Don't miss out on the latest daily deal, and check ModeSens before you buy!"

    return (
      <Box>
        <Product data = {kids} setPage = {setPage} setQuery={setQuery} page = {page} query = {query}/>
      </Box>
    )
  
}

export default Sale