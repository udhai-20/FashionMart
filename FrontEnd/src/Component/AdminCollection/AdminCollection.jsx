import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import {
  beauty_Prod_Length,
  beauty_delete,
  kids_Prod_Length,
  kids_delete,
  kids_update,
  mens_Prod_Length,
  mens_delete,
  womens_Prod_Length,
  womens_delete,
} from "../../Redux/AuthReducer/Admin/actions";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import AdminEditData from "../AdminEditData/AdminEditData";
import Pagination from "../../Pages/Products/Pagination";

function AdminCollection() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { from } = location.state;
  console.log("from:", from);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(3);
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.adminreducer.isLoading);
  const kids = useSelector((state) => state.adminreducer.kidsprod);
  const womens = useSelector((state) => state.adminreducer.womensprod);
  const mens = useSelector((state) => state.adminreducer.mensprod);
  const beauty = useSelector((state) => state.adminreducer.beautyprod);
  console.log("women", womens);
  if (from == "Womens") {
    var product = womens;
  } else if (from == "Mens") {
    var product = mens;
  } else if (from == "Beauty") {
    var product = beauty;
  } else {
    var product = kids;
  }
  const beautyProd_Len = () => {
    dispatch(beauty_Prod_Length());
  };
  const kidsProd_Len = () => {
    dispatch(kids_Prod_Length());
  };
  const mensProd_Len = () => {
    dispatch(mens_Prod_Length());
  };

  const womensProd_Len = () => {
    dispatch(womens_Prod_Length());
  };

  const handleDelete = (id) => {
    console.log("id:", id);
    if (from == "Kids") {
      dispatch(kids_delete(id));
    } else if (from == "Womens") {
      dispatch(womens_delete(id));
    } else if (from == "Mens") {
      dispatch(mens_delete(id));
    } else if (from == "Beauty") {
      dispatch(beauty_delete(id));
    }
  };

  const pageChangeHandle = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    beautyProd_Len();
    kidsProd_Len();
    mensProd_Len();
    womensProd_Len();
  }, []);

  if (loading) {
    return (
      <Container maxW="90%" marginTop={"20px"}>
        <SimpleGrid columns={{ lg: 4, md: 3, base: 1 }} spacing={10}>
          <Skeleton height="200px" />
          <Skeleton height="200px" />
          <Skeleton height="200px" />
          <Skeleton height="200px" />
        </SimpleGrid>
      </Container>
    );
  }

  return (
    <Container maxW="90%" marginTop={"20px"}>
      <Box>
        <Pagination
          pageChangeHandle={pageChangeHandle}
          currentPage={page}
          totalPages={total}
        />
      </Box>
      <Box>
        <Text fontSize={"1.3rem"} fontWeight="600">
          {from}-Section
        </Text>
      </Box>
      <SimpleGrid columns={{ lg: 4, md: 3, base: 1 }} spacing={10}>
        {product?.length > 0 &&
          product.map((el, i) => {
            return (
              <Box
                key={i + 1}
                shadow={"xs"}
                padding=".875rem"
                position={"relative"}
              >
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Image src={el.image} width={"50%"} height="200px" />
                </Box>

                <Flex
                  direction={"column"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"600"}
                    fontSize="1.2rem"
                    marginBottom={"8px"}
                  >
                    {el.title}
                  </Text>
                  <Text color={"gray.400"} marginBottom={"8px"}>
                    {el.details}
                  </Text>
                  <Text marginBottom={"8px"} color={"red.500"}>
                    {el.offer}
                    <Text as="span" color={"blackAlpha.800"}>
                      ${el.price}
                    </Text>
                  </Text>

                  <Text marginBottom={"8px"} color={"gray.400"}>
                    {el.compare}
                  </Text>
                </Flex>
                {/* delete icon  */}
                <Box
                  rounded="full"
                  width={"30px"}
                  position="absolute"
                  top={"10px"}
                  right="10px"
                  color="blue.500"
                >
                  <DeleteIcon
                    onClick={() => handleDelete(el._id)}
                    fontSize={"1.3rem"}
                  />
                </Box>
                {/* //edit icon */}
                <Box
                  rounded="full"
                  width={"30px"}
                  position="absolute"
                  top={"50px"}
                  right="10px"
                  color="blue.500"
                >
                  <AdminEditData val={from} el={el} id={el._id} />
                </Box>
              </Box>
            );
          })}
      </SimpleGrid>
    </Container>
  );
}

export default AdminCollection;
