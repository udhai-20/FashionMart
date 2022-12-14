import React,{useState} from "react";
import {Container,Box, Flex, VStack, Heading, SimpleGrid, GridItem, FormControl, FormLabel, Input, Button, Select, SelectField, Checkbox, Grid, HStack, AspectRatio, Img, Stack, Text, Divider, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,} from "@chakra-ui/react";

const options = [

  {
    id:1,
    img:"",
    name:"Google Pay"
  },
  {
    id:2,
    img:"",
    name:"PayPal"
  },
  {
    id:3,
    img:"",
    name:"AliPay"
  },
  {
    id:4,
    img:"",
    name:"Wechat"
  },
  {
    id:5,
    img:"",
    name:"Card"
  }

]
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
             {/* options */}
             <Heading size="md">PAYMENT OPTIONS</Heading>
             <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton bg="whiteAlpha.100" h="full"maxW="full">
        <Box as="span" flex='6' textAlign='left'>
          <HStack h="full" w="full">
              <AspectRatio ratio={1} w={23.6}>
                <Img/>
              </AspectRatio>
            <Text>Card</Text>
          </HStack>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg="whiteAlpha.200" pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton h="full"maxW="full">
        <Box as="span" flex='6' textAlign='left'>
          <HStack h="full" w="full">
              <AspectRatio ratio={1} w={23.6}>
                <Img/>
              </AspectRatio>
            <Text>Card</Text>
          </HStack>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton h="full"maxW="full">
        <Box as="span" flex='6' textAlign='left'>
          <HStack h="full" w="full">
              <AspectRatio ratio={1} w={23.6}>
                <Img/>
              </AspectRatio>
            <Text>Card</Text>
          </HStack>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>


</Accordion>
      </VStack>
            
         </VStack>
         
        </Flex> 
     </Container>
  );
}

export default Checkout;
