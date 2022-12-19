import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { admin_Login_req } from "../../Redux/AuthReducer/Admin/actions";
import { useNavigate } from "react-router-dom";
import { saveData } from "../Utils/customLocalstorage";

const initial = {
  email: "",
  password: "",
};
export default function AdminLogin() {
  const navigate = useNavigate();
  const toast = useToast();
  const [formdata, setFormData] = useState(initial);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.adminreducer);

  const handleCollectData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  let flag;
  const hamdleSubmit = () => {
    flag = false;
    if (email !== "" && password !== "") {
      dispatch(admin_Login_req(formdata));
      flag = true;
    }
    if (status.SignupData?.message == "login successful ") {
      console.log("sucess");
      saveData("ADMINTOKEN", status.SignupData.token);
      toast({
        position: "top",
        title: "Login successful",
        description: "Login to Admin Panel",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/admin/dashboard");
    } else {
      console.log("failure");
      toast({
        position: "top",
        title: "Login Failed",
        description: "please check entered Email || password",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  const { email, password } = formdata;
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW="lg" py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
          {/* <Text fontSize={"lg"} color={"gray.600"}>
            to <Link color={"blue.400"}>features</Link> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                name="email"
                onChange={handleCollectData}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                name="password"
                onChange={handleCollectData}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                onClick={hamdleSubmit}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
