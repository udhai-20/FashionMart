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
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiUserPin } from "react-icons/bi";
import AdminAddDatas from "../AdminAddDatas/AdminAddDatas";
import { getData } from "../Utils/customLocalstorage";

function AdminDashboard(props) {
  getData("TOKEN");
  return (
    <Container
      bg={"white"}
      maxW="85%"
      marginTop={"2rem"}
      height="200px"
      zIndex={-1}
    >
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
        columns={{ base: 1, md: 2, lg: 4, sm: 1 }}
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
            <AdminAddDatas />
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
            Total Collections-50
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
          >
            Add Datas
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
            Total Collections-50
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
          >
            Add Datas
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
            Total Collections-50
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
            Add Datas
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
            Total Collections-50
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default AdminDashboard;
