import React, { useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  ScaleFade,
  Image,
  InputRightElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import logo from "../Images/FashionMart.png";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  CheckIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const menu = useRef();
  const handelSearch = () => {
    console.log("clicked");
    setOpen(!open);
  };
  const logout = () => {
    console.log("logout");
  };

  const handleUser = () => {
    console.log("user");
    setUser(!user);
  };

  return (
    <>
      <Box
        bg={useColorModeValue("white.300", "gray.900")}
        boxShadow="sm"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              width={{ base: "60%", lg: "15%" }}
              margin={{ base: "auto", lg: "0px" }}
              display={{ base: "flex", md: "flex" }}
            >
              <Image
                src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
                color={"gray.500"}
                width="100%"
                onClick={() => navigate("")}
              />
            </Box>
            <HStack
              as={"nav"}
              fontWeight="500"
              fontSize={"small"}
              spacing={4}
              display={{ base: "none", lg: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/product")}
              >
                WOMENS
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/product")}
              >
                MENS
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/product")}
              >
                BEAUTY
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/product")}
              >
                KIDS
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/product")}
              >
                HOME
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                color
                _hover={{
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/product")}
              >
                SALE
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
            <HStack spacing={5} alignItems={"center"}>
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAACXElEQVRIid2VzWsTURTFz7w3M5mkSRpao10VigvbjVLFRReCXUoVLC5akboR0aV/gFjJH+Anigiu/Kp1UbHQjbR1IRYsSukmDZZWhNomUydJk0wmmffhIliFjO3CGRee7buH3z2X9+5T5LOze2Do41BpB/wWY+tw3CEVhj6OaLIfgvnOgKH2AOaYCm6r+PoO4K7/EKoB8c4QgfVlORAA0Gg8v/qZAIIHQ/gpwUmwgIYIJJRACRIKgaiHAoWIWkj9dmKChluT6aAYTnGTqhXZ2m3QcI+yy9Bm3q/gyasF1F0BXSMYGexFf1/Xjh4pgZKM1QgXImLbzq6AqdkM7owO4FD3Pty+NoDJ6TRm51Z39FXsKoSQYRUArHwR4bAOQrwv2+OJBdy9PoDLVyexnithMZPFvdRJXElN/TGNEAL5fAm6roEAAGMCplmElNLTwIXEw+cfsWmVYRVsmN/LePTiExj3rpdSImcWwFjjCW63blcdbGQtMCaaTCpVcHH4CJLtUbQlIki2R3Fh6DA02pyccY6NrIVqtfbL/3uB49SxtmYiFo8gFg1D0xrHI4O9GL01jfupU3jw9AMunTuK0ZszOH+md9vr1hlK5Sq2SpWmiSjp5eySbTsHvGJTSkEpAaEEyys5jL2eQzZXQEcygeHTfdjftReCC3AuwLn3dopEjIzycv7NvFOrHPSs8EFGqGVRid1ILmn1Lc8kfsjV45l/tCD/H4jcbWv9paSiELcYiksRTCDBCdyC0aoKl9p5sxMK8f8XloJCT9QqKm2hx3XU3gqONr8hhDJLTfBjPwD4jv+8cw+S0gAAAABJRU5ErkJggg==" />
              <Box fontSize={"2xl"}>
                <IoIosNotificationsOutline />
              </Box>
              <Box fontSize={"2xl"} positon={"relative"}>
                <BsBagCheck onClick={() => navigate("/cart")} />
                <Box
                  position={"absolute"}
                  top="2"
                  right={"92"}
                  bg="red.500"
                  width={"23px"}
                  textAlign="center"
                  rounded={"full"}
                  fontSize={"sm"}
                  color="whiteAlpha.800"
                >
                  1
                </Box>
              </Box>

              <Menu>
                <Button
                  onClick={handleUser}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </Button>
                {user ? (
                  <Box
                    pb={4}
                    bg="gray.100"
                    position={"absolute"}
                    right="30px"
                    top={"60px"}
                    width={{ base: "20%", lg: "15%" }}
                  >
                    <Stack spacing={"4"}>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          navigate("/profile");
                          setUser(!user);
                        }}
                      >
                        Profile
                      </Link>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          logout();
                          setUser(!user);
                        }}
                      >
                        Logout
                      </Link>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          navigate("/order");
                          setUser(!user);
                        }}
                      >
                        Orders
                      </Link>
                    </Stack>
                  </Box>
                ) : null}
              </Menu>
              {open ? (
                <Box
                  position={"absolute"}
                  zIndex={"2"}
                  top="9px"
                  right={"1%"}
                  width="40%"
                >
                  <InputGroup>
                    <Input
                      width={"100%"}
                      variant="filled"
                      placeholder="Enter amount"
                    />
                    <InputRightElement
                      children={
                        <Search2Icon color="green.500" bg={"black.900"} />
                      }
                    />
                  </InputGroup>
                </Box>
              ) : (
                <Search2Icon
                  ref={menu}
                  onClick={handelSearch}
                  color="green.500"
                />
              )}
            </HStack>
          </Flex>
          {/* ///small screen details mobile screen right side navbar*/}
          <Flex alignItems={"center"} display={{ md: "none" }}>
            <HStack spacing={5} alignItems={"center"}>
              <Box fontSize={"xl"} positon={"relative"}>
                <BsBagCheck onClick={() => navigate("/cart")} />
                <Box
                  position={"absolute"}
                  top="2"
                  right={"92"}
                  bg="red.500"
                  width={"23px"}
                  textAlign="center"
                  rounded={"full"}
                  fontSize={"sm"}
                  color="whiteAlpha.800"
                >
                  1
                </Box>
              </Box>

              <Menu>
                <Button
                  onClick={handleUser}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </Button>
                {user ? (
                  <Box
                    pb={4}
                    bg="gray.100"
                    position={"absolute"}
                    right="0px"
                    zIndex={"10"}
                    top={"68px"}
                    width={"100%"}
                  >
                    <Stack spacing={"4"}>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          navigate("/profile");
                          setUser(!user);
                        }}
                      >
                        Profile
                      </Link>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          logout();
                          setUser(!user);
                        }}
                      >
                        Logout
                      </Link>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          navigate("/order");
                          setUser(!user);
                        }}
                      >
                        Orders
                      </Link>
                    </Stack>
                  </Box>
                ) : null}

                {/* <MenuItem>LogOut</MenuItem>
                  <MenuDivider />
                  <MenuItem>Orders</MenuItem> */}
              </Menu>
              {open ? (
                <Box
                  position={"absolute"}
                  zIndex={"1500"}
                  top="9px"
                  right={"1%"}
                  width="40%"
                >
                  <InputGroup>
                    <Input
                      width={"100%"}
                      variant="filled"
                      placeholder="Enter amount"
                    />
                    <InputRightElement
                      children={
                        <Search2Icon color="green.500" bg={"black.900"} />
                      }
                    />
                  </InputGroup>
                </Box>
              ) : (
                <Search2Icon onClick={handelSearch} color="green.500" />
              )}
            </HStack>
          </Flex>
        </Flex>

        {/* ///side bars */}
        {isOpen ? (
          <ScaleFade initialScale={0.6} in={isOpen}>
            <Box
              pb={4}
              width={{ base: "100%", md: "30%" }}
              bg="gray.100"
              zIndex={"2"}
              position={"absolute"}
              left="0px"
              display={{ lg: "none", base: "flex" }}
              height={{ base: "auto", md: "100vh" }}
            >
              <Stack spacing={"4"}>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    onClose();
                    navigate("/product");
                  }}
                >
                  WOMENS
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    onClose();
                    navigate("/product");
                  }}
                >
                  MENS
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    onClose();
                    navigate("/product");
                  }}
                >
                  BEAUTY
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    onClose();
                    navigate("/product");
                  }}
                >
                  KIDS
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    onClose();
                    navigate("/product");
                  }}
                >
                  HOME
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  color
                  _hover={{
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    onClose();
                    navigate("/product");
                  }}
                >
                  SALE
                </Link>
              </Stack>
            </Box>
          </ScaleFade>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
