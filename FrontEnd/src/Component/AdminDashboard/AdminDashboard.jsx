import {
  AddIcon,
  CheckCircleIcon,
  DragHandleIcon,
  SpinnerIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiUserPin } from "react-icons/bi";
import AdminAddDatas from "../AdminAddDatas/AdminAddDatas";
import { getData } from "../Utils/customLocalstorage";
import { useDispatch, useSelector } from "react-redux";
import {
  beauty_Prod_Length,
  kids_Prod_Length,
  mens_Prod_Length,
  womens_Prod_Length,
} from "../../Redux/AuthReducer/Admin/actions";
import AdminCollection from "../AdminCollection/AdminCollection";
import { Link } from "react-router-dom";

function AdminDashboard(props) {
  const dispatch = useDispatch();
  const [kids_length, setKids_Length] = useState(0);
  const [mens_length, setMens_Length] = useState(0);
  const [womens_length, setWomens_Length] = useState(0);
  const [beauty_length, setBeauty_Length] = useState(0);
  const ProdLength = useSelector((state) => state);
  console.log("beauty_length:", beauty_length);
  const loading = useSelector((state) => state.adminreducer.isLoading);
  let data = ProdLength?.adminreducer?.kidsprod.length;
  let data1 = ProdLength.adminreducer?.mensprod.length;
  let data2 = ProdLength.adminreducer?.womensprod.length;
  let data3 = ProdLength.adminreducer?.beautyprod.length;
  console.log(data1, "mens");
  const handle = () => {
    setKids_Length(data);
    setMens_Length(data1);
    setWomens_Length(data2);
    setBeauty_Length(data3);
  };
  console.log("kids_length:", kids_length);
  const kidsProd_Len = () => {
    dispatch(kids_Prod_Length());
  };
  const mensProd_Len = () => {
    dispatch(mens_Prod_Length());
  };

  const womensProd_Len = () => {
    dispatch(womens_Prod_Length());
  };

  const beautyProd_Len = () => {
    dispatch(beauty_Prod_Length());
  };

  useEffect(() => {
    kidsProd_Len();
    handle();
  }, [data]);
  // womensProd_Len();
  // beautyProd_Len();
  // handle();
  useEffect(() => {
    mensProd_Len();
    handle();
  }, [data1]);
  useEffect(() => {
    womensProd_Len();
    handle();
  }, [data2]);
  useEffect(() => {
    beautyProd_Len();
    handle();
  }, [data3]);
  useEffect(() => {
    handle();
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
    <Container bg={"white"} maxW="85%" marginTop={"2rem"}>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        bg="blue.400"
        color={"white"}
        fontWeight="600"
        fontSize="1.4rem"
      >
        Admin Dashboard
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={10}
        padding=".875rem"
      >
        <Box
          boxShadow="base"
          backdropBlur={"blur"}
          bg={"rgba(255, 255, 255, .15"}
          height="80px"
        >
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            padding={"10px"}
          >
            <Box fontWeight={"500"}>
              <Text fontSize={"lg"}>Todays Revenu</Text>
              <Text fontSize={"lg"}>RS:55000</Text>
            </Box>
            <Box background={"blue.400"}>
              <StarIcon
                width="50px"
                padding={".345rem"}
                height={"50px"}
                margin="auto"
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                color={"white"}
                fontSize="25px"
              />
            </Box>
          </Flex>
        </Box>
        <Box
          boxShadow="base"
          backdropBlur={"blur"}
          bg={"rgba(255, 255, 255, .15"}
          height="80px"
        >
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            padding={"10px"}
          >
            <Box fontWeight={"500"}>
              <Text fontSize={"lg"}>Active Users</Text>
              <Text fontSize={"lg"}>100</Text>
            </Box>
            <Box fontSize="25px" background={"blue.400"}>
              <DragHandleIcon
                width="50px"
                padding={".345rem"}
                height={"50px"}
                margin="auto"
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                color={"white"}
              />
            </Box>
          </Flex>
        </Box>
        <Box
          boxShadow="base"
          backdropBlur={"blur"}
          bg={"rgba(255, 255, 255, .15"}
          height="80px"
        >
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            padding={"10px"}
          >
            <Box fontWeight={"500"}>
              <Text fontSize={"lg"}>New Arrivales</Text>
              <Text fontSize={"lg"}>1000+</Text>
            </Box>
            <Box fontSize="25px" background={"blue.400"}>
              <CheckCircleIcon
                width="50px"
                padding={".345rem"}
                height={"50px"}
                margin="auto"
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                color={"white"}
              />
            </Box>
          </Flex>
        </Box>
        <Box
          boxShadow="base"
          backdropBlur={"blur"}
          bg={"rgba(255, 255, 255, .15"}
          height="80px"
        >
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            padding={"10px"}
          >
            <Box fontWeight={"500"}>
              <Text fontSize={"lg"}>Sales</Text>
              <Text fontSize={"lg"}>Rs:100000</Text>
            </Box>
            <Box fontSize="25px" background={"blue.400"}>
              <SpinnerIcon
                width="50px"
                padding={".345rem"}
                height={"50px"}
                margin="auto"
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                color={"white"}
              />
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
      <Box>
        <Text fontWeight={"600"} fontSize="1.3rem">
          ProductSection:
        </Text>
      </Box>
      {/* //womens section */}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        bg="blue.400"
        color={"white"}
        fontWeight="600"
        fontSize="1.4rem"
      >
        Womens Section
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, sm: 1 }}
        spacing={10}
        padding=".875rem"
      >
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BYTRGmiU0y4ytiOLJB8iVfHbcjhZoiA43g&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            Womens
          </Text>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZSxftdLNBPbS0dpkx7M0hSF-Bx7cytTZ9Q&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
            cursor={"pointer"}
          >
            <AdminAddDatas val="Womens" />
          </Text>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KcyGHTJm8j_0em9ubbswvCmsuURVe9TbLA&usqp=CAU"
              alt="avatar"
            />
          </Box>
          <Link to="/admin/collection" state={{ from: "Womens" }}>
            <Text
              fontSize={"1.5rem"}
              fontWeight="600"
              padding={".875rem"}
              display={"flex"}
              justifyContent="center"
              color={"black"}
              backdropBlur="blur"
            >
              Collections
            </Text>
          </Link>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpbBS4HfVvE4HzAEIFqCCBNMciR3cAeDwYg&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            Total Collections-{womens_length}
          </Text>
        </Box>
      </SimpleGrid>
      {/* //Mens section */}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        bg="blue.400"
        color={"white"}
        fontWeight="600"
        fontSize="1.4rem"
      >
        Mens Section
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, sm: 1 }}
        spacing={10}
        padding=".875rem"
      >
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            Mens
          </Text>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZSxftdLNBPbS0dpkx7M0hSF-Bx7cytTZ9Q&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            <AdminAddDatas val="Mens" />
          </Text>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KcyGHTJm8j_0em9ubbswvCmsuURVe9TbLA&usqp=CAU"
              alt="avatar"
            />
          </Box>
          <Link to="/admin/collection" state={{ from: "Mens" }}>
            <Text
              fontSize={"1.5rem"}
              fontWeight="600"
              padding={".875rem"}
              display={"flex"}
              justifyContent="center"
              color={"black"}
              backdropBlur="blur"
            >
              Collection
            </Text>
          </Link>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpbBS4HfVvE4HzAEIFqCCBNMciR3cAeDwYg&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            Total Collections-{mens_length}
          </Text>
        </Box>
      </SimpleGrid>
      {/* //kids section */}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        bg="blue.400"
        color={"white"}
        fontWeight="600"
        fontSize="1.4rem"
      >
        Kids Section
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, sm: 1 }}
        spacing={10}
        padding=".875rem"
      >
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_FXy4YZZT1e7rhjFmME4WVyH4VUwGdM0iQ&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            Kids
          </Text>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZSxftdLNBPbS0dpkx7M0hSF-Bx7cytTZ9Q&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            <AdminAddDatas val="Kids" />
          </Text>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KcyGHTJm8j_0em9ubbswvCmsuURVe9TbLA&usqp=CAU"
              alt="avatar"
            />
          </Box>
          <Link to="/admin/collection" state={{ from: "Kids" }}>
            <Text
              fontSize={"1.5rem"}
              fontWeight="600"
              padding={".875rem"}
              display={"flex"}
              justifyContent="center"
              color={"black"}
              cursor="pointer"
              backdropBlur="blur"
            >
              Collections
            </Text>
          </Link>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpbBS4HfVvE4HzAEIFqCCBNMciR3cAeDwYg&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            Total Collections-{kids_length}
          </Text>
        </Box>
      </SimpleGrid>
      {/* //Beauty section */}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        bg="blue.400"
        color={"white"}
        fontWeight="600"
        fontSize="1.4rem"
      >
        Beauty Section
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, sm: 1 }}
        spacing={10}
        padding=".875rem"
      >
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"60%"}
              rounded="full"
              src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy02CGw-ZzfKlG4gyCRDJNrQMvctwrqzX-Ag&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            Beauty
          </Text>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZSxftdLNBPbS0dpkx7M0hSF-Bx7cytTZ9Q&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            <AdminAddDatas val="Beauty" />
          </Text>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KcyGHTJm8j_0em9ubbswvCmsuURVe9TbLA&usqp=CAU"
              alt="avatar"
            />
          </Box>
          <Link to="/admin/collection" state={{ from: "Beauty" }}>
            <Text
              fontSize={"1.5rem"}
              fontWeight="600"
              padding={".875rem"}
              display={"flex"}
              justifyContent="center"
              color={"black"}
              backdropBlur="blur"
            >
              Collection
            </Text>
          </Link>
        </Box>
        <Box boxShadow="base" backdropBlur={"blur"} bg="blue.100" height="auto">
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image
              width={"50%"}
              rounded="full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpbBS4HfVvE4HzAEIFqCCBNMciR3cAeDwYg&usqp=CAU"
              alt="avatar"
            />
          </Box>

          <Text
            fontSize={"1.5rem"}
            fontWeight="600"
            padding={".875rem"}
            display={"flex"}
            justifyContent="center"
            color={"black"}
            backdropBlur="blur"
          >
            Total Collections-{beauty_length}
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default AdminDashboard;
