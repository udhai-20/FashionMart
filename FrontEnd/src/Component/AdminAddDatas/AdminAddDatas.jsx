import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  SimpleGrid,
  Box,
  Toast,
  useToast,
} from "@chakra-ui/react";
import {
  admin_ProductAdd_req,
  admin_ProductAdd_req_beauty,
  admin_ProductAdd_req_mens,
  admin_ProductAdd_req_womens,
  mens_Prod_Length,
} from "../../Redux/AuthReducer/Admin/actions";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Utils/customLocalstorage";
const initial = {
  image: "",
  title: "",
  details: "",
  offer: "",
  price: "",
  quantity: "",
  compare: "",
};
function AdminAddDatas({ val }) {
  const toast = useToast();
  const dispatch = useDispatch();
  // console.log("getData:", getData("TOKEN"));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formdata, setFormData] = useState(initial);
  const handleCatch = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  console.log("value", val);
  const handleSubmit = () => {
    // console.log("click");
    // console.log("formdata:", formdata);
    if (
      image !== "" &&
      title !== "" &&
      details !== "" &&
      price !== "" &&
      quantity !== "" &&
      compare !== ""
    ) {
      if (val == "Kids") {
        dispatch(admin_ProductAdd_req(formdata));
        setFormData({
          ...formdata,
          image: "",
          title: "",
          offer: "",
          price: "",
          details: "",
          quantity: "",
          compare: "",
        });
        onClose();
      } else if (val == "Beauty") {
        dispatch(admin_ProductAdd_req_beauty(formdata));
        setFormData({
          ...formdata,
          image: "",
          title: "",
          offer: "",
          price: "",
          details: "",
          quantity: "",
          compare: "",
        });
        onClose();
      } else if (val == "Womens") {
        dispatch(admin_ProductAdd_req_womens(formdata));
        setFormData({
          ...formdata,
          image: "",
          title: "",
          offer: "",
          price: "",
          details: "",
          quantity: "",
          compare: "",
        });
        onClose();
      } else if (val == "Mens") {
        console.log(val);
        dispatch(admin_ProductAdd_req_mens(formdata));
        setFormData({
          ...formdata,
          image: "",
          title: "",
          offer: "",
          price: "",
          details: "",
          quantity: "",
          compare: "",
        });
        onClose();
      } else {
        toast({
          position: "top",
          title: "some feild are empty ||",
          description: "mandaory to fill all inputs",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      toast({
        position: "top",
        title: "some feild are empty ||",
        description: "mandaory to fill all inputs",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const { image, title, details, offer, price, quantity, compare } = formdata;

  return (
    <>
      <Text onClick={onOpen}>Add</Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          border="1px"
          maxW={{ lg: "60%", md: "90%", base: "100%" }}
        >
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input
                    value={image}
                    name="image"
                    onChange={handleCatch}
                    placeholder="Enter Url"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    value={title}
                    name="title"
                    onChange={handleCatch}
                    placeholder="Enter the Title"
                  />
                </FormControl>
              </Box>

              <FormControl>
                <FormLabel>details</FormLabel>
                <Input
                  value={details}
                  name="details"
                  onChange={handleCatch}
                  placeholder="Enter the details"
                />
              </FormControl>
              <FormControl>
                <FormLabel>offer</FormLabel>
                <Input
                  value={offer}
                  name="offer"
                  onChange={handleCatch}
                  placeholder="Enter the Title"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  value={price}
                  name="price"
                  onChange={handleCatch}
                  placeholder="Enter the Title"
                />
              </FormControl>
              <FormControl>
                <FormLabel>quantity</FormLabel>
                <Input
                  value={quantity}
                  name="quantity"
                  onChange={handleCatch}
                  placeholder="Enter the Title"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Compare</FormLabel>
                <Input
                  value={compare}
                  name="compare"
                  onChange={handleCatch}
                  placeholder="Enter the Title"
                />
              </FormControl>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit} mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminAddDatas;
