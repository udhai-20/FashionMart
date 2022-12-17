import { AspectRatio, Button, Container, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function EmptyCart() {
  return (
    <Container maxW={"container.lg"} p={10}>
        <VStack w="full" h="full">
           <Heading size="md">YOUR SHOPPING BAG IS EMPTY</Heading>
           <Text size="2xl">You haven't added any pieces to your bag - yet</Text>
           
               <Img  src='https://cdn.modesens.com/static/img/20190618_nothing.svg'/>
           
        </VStack>

        <HStack mt={31} justifyContent="center">
            <Button color="white" bg="black">SHOP WOMEN</Button>
            <Button color="white" bg="black">SHOP MEN</Button>
            <Button color="white" bg="black">SHOP KIDS</Button>
        </HStack>

    </Container>
  )
}

export default EmptyCart