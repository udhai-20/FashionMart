import React,{useState} from "react";
import {Container,Box, Flex, VStack, Heading, SimpleGrid, GridItem, FormControl, FormLabel, Input, Button, Select, SelectField, Checkbox, Grid, HStack, AspectRatio, Img, Stack, Text, Divider, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,} from "@chakra-ui/react";
import Alipay from "../Checkout/Logos/Alipay.png";
import Cards from "../Checkout/Logos/Cards.png";
import Googlepay from "../Checkout/Logos/Googlepay.png";
import Paypal from "../Checkout/Logos/Paypal.png";
import Wechat from "../Checkout/Logos/Wechat.png";
import { FaGooglePay,FaPaypal } from "react-icons/fa";

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${"token"}`, //token from local storage
// };

function Checkout(props) {

  const [toggle,setToggle] = useState(false);
  const handleChange = (e) =>{
    const { type, checked, value, name } = e.target;

  

    const inputValue = type === "checkbox" ? checked : value;
    setToggle(inputValue);

    // setFormData({ ...fromData, [name]: inputValue });
  }
  return (
     <Container maxW="container.xl"p="10">
       <VStack alignItems="center" w={{base:"xl",md:"3xl"}} m="auto" h="full">
       <Heading>FASHIONMART CONCIERGE</Heading>
       <Text>Let FashionMart determine which store fulfill your request to get the
          best price for the product you want - </Text>
          <Text>enjoy a worry-free experience
          with no additional cost to you.</Text>
        </VStack>
       <Flex h="100vh"py="20">
        
        <VStack 
        w="full"h="full" p={6} spacing={10} align="flex-start" bg="white" >
          {/* this is the  adress page */}
          <Heading size="md">YOUR SHIPPING ADDRESS</Heading>
          <SimpleGrid columns={4} columnGap={2} rowGap={2}>
            {/* this is the from start */}
            <GridItem colSpan={1}>
             <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the first name"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
             <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the Last name"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>County</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the Country name"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>Address one</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the first adress"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>Address two</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the second adress"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>Zipcode</FormLabel>
              <Input onChange={handleChange} type ="number" placeholder="Enter the Zipcode"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>City</FormLabel>
              <Input onChange={handleChange} placeholder="city"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>State&Country</FormLabel>
              <Select onChange={handleChange} placeholder="Select Country & State">
               <option>India/West-Bengal</option>
               <option>US</option>
               <option>UK</option>
              </Select>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input onChange={handleChange} type="number" placeholder="Phone Number"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
             
              <Checkbox onChange={handleChange}>Bill this Shipping Address</Checkbox>
             </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
             <Button width="full" bg="green.300" size="md">Add Adress</Button>
            </GridItem>
          </SimpleGrid>
          {/* This is billing address */}

          {toggle === false ? 
          
          <VStack  spacing={10} align="flex-start" bg="white">
            <Heading size="md">YOUR BILLING ADDRESS</Heading>
          <SimpleGrid columns={4} columnGap={2} rowGap={2}>
            {/* this is the from start */}
            <GridItem colSpan={1}>
             <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the first name"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
             <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the Last name"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>County</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the Country name"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>Address one</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the first adress"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>Address two</FormLabel>
              <Input onChange={handleChange} placeholder="Enter the second adress"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>Zipcode</FormLabel>
              <Input onChange={handleChange} type ="number" placeholder="Enter the Zipcode"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>City</FormLabel>
              <Input onChange={handleChange} placeholder="city"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>State&Country</FormLabel>
              <Select onChange={handleChange} placeholder="Select Country & State">
               <option>India/West-Bengal</option>
               <option>US</option>
               <option>UK</option>
              </Select>
             </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
             <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input onChange={handleChange} type="number" placeholder="Phone Number"></Input>
             </FormControl>
            </GridItem>
           
            <GridItem colSpan={4}>
             <Button width="full" bg="green.300" size="md">Add Adress</Button>
            </GridItem>
          </SimpleGrid>

          </VStack>
        
        
        : null
        
        
        }
          {/* this is for shopping bag */}
          <Heading size="md">SHOPPING BAG</Heading>
          <VStack >
          <HStack  spacing={6} alignItems="center">
            <AspectRatio ratio={1} w={24}>
              <Img/>
            </AspectRatio>
            <Stack
            spacing={0}
            w="full"
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            >
              <VStack w="full" spacing={0} alignItems="flex-start">
                <Heading size="md">This is the entire</Heading>
                <Text>fnmglfnmglnml</Text>
              </VStack>
              <Heading size="sm" alignItems="flex-end">
                $119.50
              </Heading>
            </Stack>
          </HStack>
          </VStack>
        </VStack>

        <VStack 
        w="full"h="full" p={10} spacing={10} align="flex-start"  >
          {/* this is the checkout page */}
          <Heading size="md">SUMMARY</Heading>
          <VStack spacing={4} alignItems="stretch"w="full" border="4px" borderColor="gray.300"p={3}>
            <HStack justifyContent="space-between">
               <Text>Currency</Text>
               <Heading size="sm">USD</Heading>
            </HStack>
            <HStack justifyContent="space-between">
               <Text>Quantity</Text>
               <Heading size="sm">Total Price</Heading>
            </HStack>
            <HStack justifyContent="space-between">
               <Text>Store Shipping Free</Text>
               <Heading size="sm">$29.00</Heading>
            </HStack>
            <HStack justifyContent="space-between">
               <Text>Taxes</Text>
               <Heading size="sm">$0</Heading>
            </HStack>
            <Divider/>
            <HStack justifyContent="space-between">
               <Text>Total</Text>
               <Heading>$0</Heading>
            </HStack>
            
          </VStack>
       <VStack w="full" p={2} alignItems="left"  border="4px" borderColor="gray.300">
        {/*payment  options */}
        <Heading size="md">PAYMENT OPTIONS</Heading>
       <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton bg="whiteAlpha.100" h="full"maxW="full">
        <Box as="span" flex='6' textAlign='left'>
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
              <Input type="number"  placeholder=" ******* *******"></Input>
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
              <Input  type="number"  placeholder="***"></Input>
             </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
             <FormControl>
              <FormLabel>Postal Code</FormLabel>
              <Input type="number"  placeholder="Postal Code"></Input>
             </FormControl>
            </GridItem>
        </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton h="full"maxW="full">
        <Box as="span" flex='6' textAlign='left'>
          <HStack h="full" w="full">
              <AspectRatio ratio={1} w={23.6}>
                <Img src={Googlepay}/>
              </AspectRatio>
            <Heading size="sm">Googlepay</Heading>
          </HStack>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4}>
      <Button w="full" size="lg" color="white" bg="black" ><FaGooglePay size={60}/></Button>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton h="full"maxW="full">
        <Box as="span" flex='6' textAlign='left'>
          <HStack h="full" w="full">
              <AspectRatio ratio={1} w={23.6}>
                <Img src = {Paypal}/>
              </AspectRatio>
          <Heading size="sm">Paypal</Heading>
          </HStack>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Button w="full" size="lg" color="blue.600" bg="yellow.400" ><FaPaypal size={40}/></Button>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton h="full"maxW="full">
        <Box as="span" flex='6' textAlign='left'>
          <HStack h="full" w="full">
              <AspectRatio ratio={1} w={23.6}>
                <Img src = {Alipay}/>
              </AspectRatio>
          <Heading size="sm">Alipay</Heading>
          </HStack>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     This services is not availaible fo india now
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton h="full"maxW="full">
        <Box as="span" flex='6' textAlign='left'>
          <HStack h="full" w="full">
              <AspectRatio ratio={1} w={23.6}>
                <Img src = {Wechat}/>
              </AspectRatio>
          <Heading size="sm">Wechat</Heading>
          </HStack>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    This services is not availaible fo india now
    </AccordionPanel>
  </AccordionItem>
</Accordion>
   <Button bg="black" color="white">PLACE ORDER</Button>
      </VStack>

      <Text>By placing order you agree to <span style={{textDecoration: "underline",color:"blue"}}><a  href="">FashionMart Terms</a></span>. An authorization hold will be placed on your payment method. The funds will only be captured if your order can be confirmed.</Text>
            
         </VStack>
         
        </Flex> 
     </Container>
  );
}

export default Checkout;
