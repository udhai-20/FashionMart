import React, { useEffect, useRef } from "react";
import firebase from "../../Service/firebase";
import { auth } from "../../Service/firebase";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  ScaleFade,
  Image,
  InputRightElement,
  Input,
  InputGroup,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import logo from "../Images/FashionMart.png";
import { FaRegUser } from "react-icons/fa";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  CheckIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import Login from "../../Pages/Login/Login";
import fashion from "../Images/Ig.png";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getData, saveData } from "../Utils/customLocalstorage";
import { cart_length } from "../../Redux/AppReducer/SingleProduct/action";

function Navbar(props) {
  const [username, setUsername] = useState(null);
  const dispatch = useDispatch();
  const [prod, setProd] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSecondModalOpen,
    onOpen: onSecondModalOpen,
    onClose: onSecondModalClose,
  } = useDisclosure();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [cart, cartLength] = useState(0);
  const navigate = useNavigate();
  const menu = useRef();
  const length = useSelector(
    (state) => state.singleproductreducer.navbarcartlength.length
  );
  console.log("length:", length);
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
  //for cart length in nave bar api req
  console.log("cart:", cart);
  const usertoken = getData("token");
  useEffect(() => {
    dispatch(cart_length(usertoken));
  }, [cart]);
  ///admin check
  let admintoken = getData("ADMINTOKEN");
  //firbase
  console.log("admintoken res", admintoken !== "");
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUsername(user);
    });
  }, []);
  console.log(username);
  return (
    <>
      <Box
      // border= "1px solid red"
        // bg={useColorModeValue("white.300", "gray.900")}
        position={"fixed"}
        width="100%"
        top="0px"
        zIndex= "1000"
        bg="white"
        px={4}
        boxShadow="sm"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={prod ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={() => setProd(!prod)}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              width={{ base: "60%", lg: "15%" }}
              margin={{ base: "auto", lg: "0px" }}
              display={{ base: "flex", md: "flex" }}
            >
              {admintoken ? (
                <Image
                  src={fashion}
                  color={"gray.500"}
                  width="100%"
                  onClick={() => navigate("/admin/dashboard")}
                />
              ) : (
                <Image
                  src={fashion}
                  color={"gray.500"}
                  width="100%"
                  onClick={() => navigate("")}
                />
              )}
            </Box>
            {admintoken !== "" ? (
              <HStack
                as={"nav"}
                fontWeight="500"
                fontSize={"small"}
                spacing={4}
                display={{ base: "none", lg: "flex" }}
              >
                <NavLink
                  to="/admin/collection"
                  state={{ from: "Womens" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  WOMENS
                </NavLink>
                <NavLink
                  to="/admin/collection"
                  state={{ from: "Mens" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  MENS
                </NavLink>
                <NavLink
                  to="/admin/collection"
                  state={{ from: "Beauty" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  BEAUTY
                </NavLink>
                <NavLink
                  to="/admin/collection"
                  state={{ from: "Kids" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  KIDS
                </NavLink>
              </HStack>
            ) : (
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
                  onClick={() => navigate("/women")}
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
                  onClick={() => navigate("/men")}
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
                  onClick={() => navigate("/beauty")}
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
                  onClick={() => navigate("/kids")}
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
                  onClick={() => navigate("")}
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
                  onClick={() => navigate("/sale")}
                >
                  SALE
                </Link>
              </HStack>
            )}
          </HStack>
          <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
            <HStack spacing={5} alignItems={"center"}>
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAACXElEQVRIid2VzWsTURTFz7w3M5mkSRpao10VigvbjVLFRReCXUoVLC5akboR0aV/gFjJH+Anigiu/Kp1UbHQjbR1IRYsSukmDZZWhNomUydJk0wmmffhIliFjO3CGRee7buH3z2X9+5T5LOze2Do41BpB/wWY+tw3CEVhj6OaLIfgvnOgKH2AOaYCm6r+PoO4K7/EKoB8c4QgfVlORAA0Gg8v/qZAIIHQ/gpwUmwgIYIJJRACRIKgaiHAoWIWkj9dmKChluT6aAYTnGTqhXZ2m3QcI+yy9Bm3q/gyasF1F0BXSMYGexFf1/Xjh4pgZKM1QgXImLbzq6AqdkM7owO4FD3Pty+NoDJ6TRm51Z39FXsKoSQYRUArHwR4bAOQrwv2+OJBdy9PoDLVyexnithMZPFvdRJXElN/TGNEAL5fAm6roEAAGMCplmElNLTwIXEw+cfsWmVYRVsmN/LePTiExj3rpdSImcWwFjjCW63blcdbGQtMCaaTCpVcHH4CJLtUbQlIki2R3Fh6DA02pyccY6NrIVqtfbL/3uB49SxtmYiFo8gFg1D0xrHI4O9GL01jfupU3jw9AMunTuK0ZszOH+md9vr1hlK5Sq2SpWmiSjp5eySbTsHvGJTSkEpAaEEyys5jL2eQzZXQEcygeHTfdjftReCC3AuwLn3dopEjIzycv7NvFOrHPSs8EFGqGVRid1ILmn1Lc8kfsjV45l/tCD/H4jcbWv9paSiELcYiksRTCDBCdyC0aoKl9p5sxMK8f8XloJCT9QqKm2hx3XU3gqONr8hhDJLTfBjPwD4jv+8cw+S0gAAAABJRU5ErkJggg==" />
              <Box fontSize={"2xl"}>
                <IoIosNotificationsOutline />
              </Box>
              {!admintoken && (
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
                    {length}
                  </Box>
                </Box>
              )}
              {username ? (
                <Menu isOpen={isOpen}>
                  <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <Image
                      width="30px"
                      height="30px"
                      borderRadius={"50%"}
                      src={username.photoURL}
                    />
                  </MenuButton>
                  <MenuList
                    width={"200px"}
                    borderRadius="10px"
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                  >
                    {admintoken == "" && (
                      <MenuItem>
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
                          {username.displayName}
                        </Link>
                      </MenuItem>
                    )}
                    {admintoken == "" && (
                      <MenuItem>
                        <Link
                          px={2}
                          py={1}
                          rounded={"md"}
                          _hover={{
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            auth.signOut();
                            window.location.reload();
                          }}
                        >
                          Sign Out
                        </Link>
                      </MenuItem>
                    )}
                  </MenuList>
                </Menu>
              ) : (
                <Menu isOpen={isOpen}>
                  <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <FaRegUser size={23} />
                  </MenuButton>
                  <MenuList
                    width={"200px"}
                    borderRadius="10px"
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                  >
                    {admintoken == "" && (
                      <MenuItem>
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
                      </MenuItem>
                    )}

                    {admintoken == "" && (
                      <MenuItem>
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
                      </MenuItem>
                    )}
                    {admintoken == "" && (
                      <MenuItem>
                        <Link
                          px={2}
                          py={1}
                          rounded={"md"}
                          _hover={{
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            navigate("/wishlist");
                            setUser(!user);
                          }}
                        >
                          Wishlist
                        </Link>
                      </MenuItem>
                    )}

                    {admintoken !== "" ? (
                      <MenuItem>
                        <Link
                          px={2}
                          py={1}
                          rounded={"md"}
                          _hover={{
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            navigate("/admin/login");
                            saveData("ADMINTOKEN", "");
                            setUser(!user);
                          }}
                        >
                          Admin_Logout
                        </Link>
                      </MenuItem>
                    ) : (
                      <MenuItem>
                        <Link
                          px={2}
                          py={1}
                          rounded={"md"}
                          _hover={{
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            navigate("/admin/signup");
                            setUser(!user);
                          }}
                        >
                          Admin
                        </Link>
                      </MenuItem>
                    )}
                    {admintoken == "" && (
                      <MenuItem>
                        <Button>
                          <Login />
                        </Button>
                      </MenuItem>
                    )}
                  </MenuList>
                </Menu>
              )}

              {open ? (
                <Box
                  position={"absolute"}
                  zIndex={"2"}
                  top="9px"
                  right={"1%"}
                  width="40%"
                >
                  {/* <InputGroup>
                    <Input
                      width={"100%"}
                      variant="filled"
                      placeholder="Enter amount"
                      bg={"white"}
                      
                    />
                    <InputRightElement
                      children={
                        <Search2Icon color="green.500" bg={"black.900"} />
                      }
                    />
                  </InputGroup> */}
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
              {!admintoken && (
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
                    {length}
                  </Box>
                </Box>
              )}

              <Menu isOpen={isOpen}>
                <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <FaRegUser size={23} />
                </MenuButton>
                <MenuList
                  width={"200px"}
                  borderRadius="10px"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  {admintoken == "" && (
                    <MenuItem>
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
                    </MenuItem>
                  )}

                  {admintoken == "" && (
                    <MenuItem>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                      >
                        <Login />
                      </Link>
                    </MenuItem>
                  )}
                  {admintoken == "" && (
                    <MenuItem>
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
                    </MenuItem>
                  )}

                  {admintoken == "" && (
                    <MenuItem>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          navigate("/wishlist");
                          setUser(!user);
                        }}
                      >
                        Wishlist
                      </Link>
                    </MenuItem>
                  )}

                  {admintoken !== "" ? (
                    <MenuItem>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          navigate("/admin/login");
                          saveData("ADMINTOKEN", "");
                          setUser(!user);
                        }}
                      >
                        Admin_Logout
                      </Link>
                    </MenuItem>
                  ) : (
                    <MenuItem>
                      <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          navigate("/admin/signup");
                          setUser(!user);
                        }}
                      >
                        Admin
                      </Link>
                    </MenuItem>
                  )}
                </MenuList>
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
        {prod && (
          <ScaleFade initialScale={0.6} in={onSecondModalOpen}>
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
                    navigate("/women");
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
                    navigate("/men");
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
                    navigate("/beauty");
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
                    navigate("/kids");
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
                    navigate("");
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
                    navigate("/sale");
                  }}
                >
                  SALE
                </Link>
              </Stack>
            </Box>
          </ScaleFade>
        )}
      </Box>
    </>
  );
}

export default Navbar;

