import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  SelectField,
  Checkbox,
  Grid,
  HStack,
  AspectRatio,
  useToast,
  Img,
  Stack,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Alipay from "../Checkout/Logos/Alipay.png";
import Cards from "../Checkout/Logos/Cards.png";
import Googlepay from "../Checkout/Logos/Googlepay.png";
import Paypal from "../Checkout/Logos/Paypal.png";
import Wechat from "../Checkout/Logos/Wechat.png";
import { FaGooglePay, FaPaypal } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  get_failure,
  get_request,
  get_success,
} from "../../Redux/AppReducer/Cart/action";
import Loading from "./Loading";
import EmptyCart from "../Cart/EmptyCart";
import { getData } from "../../Component/Utils/customLocalstorage";
function Checkout(props) {
  const token = getData("token");
  const data = useSelector((state) => state.cartreducer.data);
  const loading = useSelector((state) => state.cartreducer.isLoading);
  console.log(data);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  // const[submituser,setSubmituser] = useState([]);
  // const [fromData, setFormData] = useState(initState);
  const [Isloading, setIsloading] = useState(false);

  const [nameone, setNameone] = useState("");
  const [nametwo, setNametwo] = useState("");
  const [addressone, setAddressone] = useState("");
  const [addresstwo, setAddresstwo] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [checknumber, setChecknumber] = useState("");
  const [checkcvv, setCvv] = useState("");

  const totalsum = data.reduce((sum, ele) => {
    return sum + ele.price * ele.quantity;
  }, 0);
  const totalqty = data.reduce((sum, ele) => {
    return sum + ele.quantity;
  }, 0);
  let tax = totalqty >= 6 ? 29 : 10;

  let discount = data.reduce((ele)=>{
    
    return((5/100)*totalsum)
  })

  console.log(discount)
  async function fetchData() {
    const myHeaders = new Headers({
      mode: "no-cors",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });

    return await fetch("https://colorful-erin-pike.cyclic.app/cart", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => {
        dispatch(get_request());

        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((response) => {
        dispatch(get_success(response));
        // setAllproducts(response);
        console.log(response);
      })
      .catch((error) => {
        dispatch(get_failure());
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (e) => {
    const { type, checked, value, name } = e.target;

    const inputValue = type === "checkbox" ? checked : value;
    setToggle(inputValue);

    // setFormData({ ...fromData, [name]: inputValue });
  };
  const finallyPlace = () => {
    if (checknumber.length === 16 && checkcvv.length === 3) {
      toast({
        title: "You Are Good To Go",
        description: "Card Added Successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setTimeout(function () {
        return navigate("/otp");
      }, 3000);

      return navigate("/loading");
    } else {
      toast({
        title: "Enter correct  card number or choose another pament option",
        description: "Payment Failed",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = (e) => {
    if (
      nameone.length === 0 ||
      nametwo.length === 0 ||
      addressone.length === 0 ||
      zipcode.length == 0 ||
      phone.length === 0
    ) {
      toast({
        title: "Some Input Field Is Missing.",
        description: "Address Not Added",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "You Are Good To Go",
        description: "Address Added Successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setTimeout(() => {
        setIsloading(false);
      }, 2000);
      setIsloading(true);
    }
  };

  return (
    <Box mt={"100px"}>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          {data.length === 0 ? (
            <Container maxH="" maxW="container.xl" p="10">
              <EmptyCart />
            </Container>
          ) : (
            <Container maxH="" maxW="container.xl" p="10">
              <VStack
                alignItems="center"
                w={{ base: "xl", md: "3xl" }}
                m="auto"
                h="full"
              >
                <Heading size="md">FASHIONMART CONCIERGE</Heading>
                <Text>
                  Let FashionMart determine which store fulfill your request to
                  get the best price for the product you want -{" "}
                </Text>
                <Text>
                  enjoy a worry-free experience with no additional cost to you.
                </Text>
              </VStack>
              <Flex h="full" py="20">
                <VStack
                  w="full"
                  h="full"
                  p={{ base: 4, sm: 6 }}
                  spacing={10}
                  align="flex-start"
                  bg="white"
                >
                  {/* this is the  adress page */}
                  <Heading size="md">YOUR SHIPPING ADDRESS</Heading>

                  <SimpleGrid columns={4} columnGap={2} rowGap={2}>
                    {/* this is the from start */}

                    <GridItem colSpan={{ base: 2, md: 2 }}>
                      <FormControl isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          name="name1"
                          onChange={(e) => setNameone(e.target.value)}
                          placeholder="Enter the first name"
                        ></Input>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 2, md: 2 }}>
                      <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          name="name2"
                          onChange={(e) => setNametwo(e.target.value)}
                          placeholder="Enter the Last name"
                        ></Input>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 4, md: 4 }}>
                      <FormControl isRequired>
                        <FormLabel>County</FormLabel>
                        <Input
                          name="country"
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="Enter the Country name"
                        ></Input>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormControl isRequired>
                        <FormLabel>Address one</FormLabel>
                        <Input
                          name="addressone"
                          onChange={(e) => setAddressone(e.target.value)}
                          placeholder="Enter the first adress"
                        ></Input>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormControl>
                        <FormLabel>Address two</FormLabel>
                        <Input
                          name="addresstwo"
                          onChange={(e) => setAddresstwo(e.target.value)}
                          placeholder="Enter the second adress"
                        ></Input>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormControl isRequired>
                        <FormLabel>Zipcode</FormLabel>
                        <Input
                          name="zipcode"
                          onChange={(e) => setZipcode(e.target.value)}
                          type="number"
                          placeholder="Enter the Zipcode"
                        ></Input>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormControl isRequired>
                        <FormLabel>City</FormLabel>
                        <Input
                          name="city"
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="city"
                        ></Input>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormControl>
                        <FormLabel>State&Country</FormLabel>
                        <Select
                          name="statendcountry"
                          onChange={(e) => setState(e.target.value)}
                          placeholder="Select Country & State"
                        >
                          <option>India/West-Bengal</option>
                          <option>US</option>
                          <option>UK</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormControl isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          name="phonenumber"
                          onChange={(e) => setPhone(e.target.value)}
                          type="number"
                          placeholder="Phone Number"
                        ></Input>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormControl>
                        <Checkbox onChange={handleChange}>
                          Bill this Shipping Address
                        </Checkbox>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Button
                        Isloading
                        colorScheme="teal"
                        variant="solid"
                        onClick={handleSubmit}
                        width="full"
                        bg="green.300"
                        size="md"
                      >
                        Add Adress
                      </Button>
                    </GridItem>
                  </SimpleGrid>
                  {/* This is billing address */}

                  {toggle === false ? (
                    <VStack spacing={10} align="flex-start" bg="white">
                      <Heading size="md">YOUR BILLING ADDRESS</Heading>
                      <SimpleGrid columns={4} columnGap={2} rowGap={2}>
                        {/* this is the from start */}

                        <GridItem colSpan={1}>
                          <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder="Enter the first name"></Input>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormControl>
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder="Enter the Last name"></Input>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>County</FormLabel>
                            <Input placeholder="Enter the Country name"></Input>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>Address one</FormLabel>
                            <Input placeholder="Enter the first adress"></Input>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>Address two</FormLabel>
                            <Input placeholder="Enter the second adress"></Input>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>Zipcode</FormLabel>
                            <Input
                              type="number"
                              placeholder="Enter the Zipcode"
                            ></Input>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>City</FormLabel>
                            <Input placeholder="city"></Input>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>State&Country</FormLabel>
                            <Select placeholder="Select Country & State">
                              <option>India/West-Bengal</option>
                              <option>US</option>
                              <option>UK</option>
                            </Select>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <FormControl>
                            <FormLabel>Phone Number</FormLabel>
                            <Input
                              type="number"
                              placeholder="Phone Number"
                            ></Input>
                          </FormControl>
                        </GridItem>

                        <GridItem colSpan={4}>
                          <Button width="full" bg="green.300" size="md">
                            Add Adress
                          </Button>
                        </GridItem>
                      </SimpleGrid>
                    </VStack>
                  ) : null}
                  {/* this is for shopping bag */}
                  <Heading size="md">SHOPPING BAG</Heading>
                  <VStack>
                    {data.map((ele, i) => (
                      <HStack
                        border="4px"
                        borderColor="gray.200"
                        key={i}
                        p={6}
                        spacing={10}
                        alignItems="center"
                      >
                        <AspectRatio ratio={1} w={24}>
                          <Img src={ele.image} />
                        </AspectRatio>
                        <Stack
                          spacing={0}
                          w="full"
                          direction="row"
                          justifyContent="space-around"
                          alignItems="center"
                        >
                          <VStack w="full" spacing={1} alignItems="flex-start">
                            <Heading size="md">{ele.title}</Heading>
                            <Text>{ele.details}</Text>
                            <Text>Quantity:{ele.quantity}</Text>
                          </VStack>
                          <Heading size="sm" alignItems="flex-end">
                            ${ele.price * ele.quantity}.00
                          </Heading>
                        </Stack>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>

                <VStack
                  w="full"
                  h="full"
                  p={10}
                  spacing={10}
                  align="flex-start"
                >
                  {/* this is the checkout page */}
                  <Heading size="md">SUMMARY</Heading>
                  <VStack
                    spacing={4}
                    alignItems="stretch"
                    w="full"
                    border="4px"
                    borderColor="gray.300"
                    p={3}
                  >
                    <HStack justifyContent="space-between">
                      <Text>Currency</Text>
                      <Heading size="sm">USD</Heading>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text>Total</Text>
                      <Heading size="sm">${totalsum.toFixed(2)}</Heading>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text color="green.400">Discount</Text>
                      <Heading color="green.400" size="sm">-${Math.floor(discount).toFixed(2)}</Heading>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text>Store Shipping Free</Text>
                      <Heading size="sm">$29.00</Heading>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text>Taxes</Text>
                      <Heading size="sm">${tax.toFixed(2)}</Heading>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text color="green.400">Delivery</Text>
                      <Heading color="green.400" size="sm">FREE</Heading>
                    </HStack>
                    <Divider />
                    <HStack justifyContent="space-between">
                      <Text>Total</Text>
                      <Heading size="md">
                        ${(totalsum + 29 + tax - Math.floor(discount)).toFixed(2)}
                      </Heading>
                    </HStack>
                    <Divider />
                    <HStack justifyContent="space-between">
                      <Heading size="sm" color="green.400">You will save ${Math.floor(discount)} in this order</Heading>
                     
                    </HStack>
                  </VStack>
                  <VStack
                    w="full"
                    p={2}
                    alignItems="left"
                    border="4px"
                    borderColor="gray.300"
                  >
                    {/*payment  options */}
                    <Heading size="md">PAYMENT OPTIONS</Heading>
                    <Accordion allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            bg="whiteAlpha.100"
                            h="full"
                            maxW="full"
                          >
                            <Box as="span" flex="6" textAlign="left">
                              <HStack h="full" w="full">
                                <AspectRatio ratio={1} w={23.6}>
                                  <Img src={Cards} />
                                </AspectRatio>
                                <Heading size="sm">Card</Heading>
                              </HStack>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel bg="whiteAlpha.200" pb={4}>
                          <SimpleGrid columns={4} columnGap={2} rowGap={2}>
                            {/* this is the from start */}
                            <GridItem colSpan={4}>
                              <FormControl>
                                <FormLabel>Card Number</FormLabel>
                                <Input
                                  onChange={(e) =>
                                    setChecknumber(e.target.value)
                                  }
                                  type="number"
                                  placeholder=" ******* *******"
                                ></Input>
                              </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                              <FormControl>
                                <FormLabel>Expiration Date(MM/YY)</FormLabel>
                                <Input type="text" placeholder="MM/YY"></Input>
                              </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                              <FormControl>
                                <FormLabel>CVV (3 digits)</FormLabel>
                                <Input
                                  onChange={(e) => setCvv(e.target.value)}
                                  type="number"
                                  placeholder="***"
                                ></Input>
                              </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                              <FormControl>
                                <FormLabel>Postal Code</FormLabel>
                                <Input
                                  type="number"
                                  placeholder="Postal Code"
                                ></Input>
                              </FormControl>
                            </GridItem>
                          </SimpleGrid>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <h2>
                          <AccordionButton h="full" maxW="full">
                            <Box as="span" flex="6" textAlign="left">
                              <HStack h="full" w="full">
                                <AspectRatio ratio={1} w={23.6}>
                                  <Img src={Googlepay} />
                                </AspectRatio>
                                <Heading size="sm">Googlepay</Heading>
                              </HStack>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <a
                            style={{ textDecoration: "none" }}
                            target="_blank"
                            href="https://pay.google.com/gp/w/u/0/home/signup"
                          >
                            <Button w="full" size="lg" color="white" bg="black">
                              <FaGooglePay size={45} />
                            </Button>
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <h2>
                          <AccordionButton h="full" maxW="full">
                            <Box as="span" flex="6" textAlign="left">
                              <HStack h="full" w="full">
                                <AspectRatio ratio={1} w={23.6}>
                                  <Img src={Paypal} />
                                </AspectRatio>
                                <Heading size="sm">Paypal</Heading>
                              </HStack>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <a
                            href="https://www.paypal.com/us/webapps/mpp/account-selection"
                            target="_blank"
                          >
                            <Button
                              w="full"
                              size="lg"
                              color="blue.600"
                              bg="yellow.400"
                            >
                              <FaPaypal size={40} />
                            </Button>
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <h2>
                          <AccordionButton h="full" maxW="full">
                            <Box as="span" flex="6" textAlign="left">
                              <HStack h="full" w="full">
                                <AspectRatio ratio={1} w={23.6}>
                                  <Img src={Alipay} />
                                </AspectRatio>
                                <Heading size="sm">Alipay</Heading>
                              </HStack>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          This services is not availaible for india now
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <h2>
                          <AccordionButton h="full" maxW="full">
                            <Box as="span" flex="6" textAlign="left">
                              <HStack h="full" w="full">
                                <AspectRatio ratio={1} w={23.6}>
                                  <Img src={Wechat} />
                                </AspectRatio>
                                <Heading size="sm">Wechat</Heading>
                              </HStack>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          This services is not availaible for india now
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <Button onClick={finallyPlace} bg="black" color="white">
                      PLACE ORDER
                    </Button>
                  </VStack>

                  <Text>
                    By placing order you agree to{" "}
                    <span
                      style={{ textDecoration: "underline", color: "blue" }}
                    >
                      <a href="">FashionMart Terms</a>
                    </span>
                    . An authorization hold will be placed on your payment
                    method. The funds will only be captured if your order can be
                    confirmed.
                  </Text>
                </VStack>
              </Flex>
            </Container>
          )}
        </>
      )}
    </Box>
  );
}

export default Checkout;
