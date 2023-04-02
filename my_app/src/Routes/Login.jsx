// import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import React from "react";
import { AuthContext } from "../Context/AuthContext";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const toast = useToast();

  function handleClick() {
    return toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      position: "top",
      isClosable: true,
    });
    navigate("/");
  }

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
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
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
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
              <Link href="/booking" style={{textDecoration:"none"}}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleClick}
                >
                  Sign in
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
