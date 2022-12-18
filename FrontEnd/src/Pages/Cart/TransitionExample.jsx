import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_failure,
  delete_request,
  delete_success,
} from "../../Redux/AppReducer/Cart/action";
import { getData } from "../../Component/Utils/customLocalstorage";
export function TransitionExample({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const token = getData("token");
  const dispatch = useDispatch();
  // this is the delete function
  async function deleteData() {
    const myHeaders = new Headers({
      mode: "no-cors",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return await fetch(
      `https://colorful-erin-pike.cyclic.app/cart/delete/${id}`,
      {
        method: "DELETE",
        headers: myHeaders,
      }
    )
      .then((response) => {
        dispatch(delete_request());
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((response) => {
        dispatch(delete_success());
      })
      .catch((error) => {
        dispatch(delete_failure());
        console.error(error);
      });
  }
  //  this is for delete

  const HandleDelete = () => {
    deleteData();
    toast({
      title: "Product Deleted",
      description: " Deleted Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setTimeout(() => {
      window.location.reload(false);
    }, 3000);
  };

  return (
    <>
      <Button bg="none" onClick={onOpen}>
        <RxCross2 size={30} color="gray" />
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Delete The Items? </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to remove your products? quantity products
            will be deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button onClick={HandleDelete} colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
