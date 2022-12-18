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
  beauty_update,
  kids_update,
  mens_update,
  womens_update,
} from "../../Redux/AuthReducer/Admin/actions";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Utils/customLocalstorage";
import { EditIcon } from "@chakra-ui/icons";
// const initial = {
//   image: "",
//   title: "",
//   details: "",
//   offer: "",
//   price: "",
//   quantity: "",
//   compare: "",
// };
function AdminEditData({ val, el, id }) {
  //   console.log(" el:", el, id);
  const toast = useToast();
  const dispatch = useDispatch();
  // console.log("getData:", getData("TOKEN"));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formdata, setFormData] = useState(el);
  const handleCatch = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = () => {
    console.log("check", formdata);
    if (
      image !== "" &&
      title !== "" &&
      details !== "" &&
      price !== "" &&
      quantity !== "" &&
      compare !== ""
    ) {
      if (val == "Kids") {
        dispatch(kids_update(id, formdata));
        onClose();
      } else if (val == "Beauty") {
        // console.log(val);
        dispatch(beauty_update(id, formdata));
        onClose();
      } else if (val == "Womens") {
        dispatch(womens_update(id, formdata));
        onClose();
      } else if (val == "Mens") {
        dispatch(mens_update(id, formdata));
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
      <EditIcon onClick={onOpen} />
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
                    defaultValue={el.image}
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
                    defaultValue={el.title}
                    name="title"
                    onChange={handleCatch}
                    placeholder="Enter the Title"
                  />
                </FormControl>
              </Box>

              <FormControl>
                <FormLabel>details</FormLabel>
                <Input
                  defaultValue={el.details}
                  name="details"
                  onChange={handleCatch}
                  placeholder="Enter the details"
                />
              </FormControl>
              <FormControl>
                <FormLabel>offer</FormLabel>
                <Input
                  defaultValue={el.offer}
                  name="offer"
                  onChange={handleCatch}
                  placeholder="Enter the Title"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  defaultValue={el.price}
                  name="price"
                  onChange={handleCatch}
                  placeholder="Enter the Title"
                />
              </FormControl>
              <FormControl>
                <FormLabel>quantity</FormLabel>
                <Input
                  defaultValue={el.quantity}
                  name="quantity"
                  onChange={handleCatch}
                  placeholder="Enter the Title"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Compare</FormLabel>
                <Input
                  defaultValue={el.compare}
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

export default AdminEditData;
