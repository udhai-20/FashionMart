import React from "react";
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
} from "@chakra-ui/react";

function AdminAddDatas() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Text onClick={onOpen}>Add</Text>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input ref={initialRef} placeholder="Enter Url" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Enter the Title" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>details</FormLabel>
              <Input placeholder="Enter the Title" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>offer</FormLabel>
              <Input placeholder="Enter the Title" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder="Enter the Title" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>quantity</FormLabel>
              <Input placeholder="Enter the Title" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Compare</FormLabel>
              <Input placeholder="Enter the Title" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
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
