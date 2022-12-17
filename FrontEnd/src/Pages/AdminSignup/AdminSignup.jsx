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
import { useState } from "react";
import { admin_Signup_req } from "../../Redux/AuthReducer/Admin/actions";
import { NavLink, useNavigate } from "react-router-dom";

const initial = {
  email: "",
  password: "",
};
export default function AdminSignup() {
  const navigate = useNavigate();
  const toast = useToast();
  const [formdata, setFormData] = useState(initial);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.adminreducer);
  console.log("status:", status);
  const handleCollectData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const hamdleSubmit = () => {
    if (email !== "" && password !== "") {
      dispatch(admin_Signup_req(formdata));
      setFormData({ ...formdata, email: "", password: "" });
      console.log("sdsd", status.SignupData);
      if (status.SignupData == "Already registered") {
        console.log("check");
        toast({
          position: "top",
          title: "Already Regisered",
          description: "please check",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "signup successful",
          description: "Login to Admin Panel",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/admin/login");
      }
      console.log("formdata:", formdata);
    } else {
      toast({
        position: "top",
        title: "please fill the input field",
        description: "Signup Failed",
        status: "error",
        duration: 2000,
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
          <Heading fontSize={"4xl"}>Admin Signup</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Already Have A accrount
            <Button
              color={"blue.500"}
              variant="link"
              textStyle={"none"}
              marginLeft="10px"
              onClick={() => navigate("/admin/login")}
            >
              Login
            </Button>
          </Text>
          |
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
