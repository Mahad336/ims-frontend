import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import React, { useState, useEffect } from "react";
import { useLogin } from "../../hooks/Auth/useLogin";
import { useNavigate } from "react-router-dom";
import { UserRole } from "../../constant/UserRoles";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { mutate, isSuccess, data } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Flex
      minHeight="90vh"
      width="full"
      align="center"
      justifyContent="center"
      direction="column"
      bg={"whiteAlpha.900"}
      rounded={5}
    >
      <Image
        boxSize="150px"
        objectFit="cover"
        alt="Gigalabs"
        src={logo}
        m={5}
        p={5}
      />
      <Box
        borderWidth={1}
        px={4}
        pt={8}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
        rounded=" 2xl"
      >
        <Text as="b" fontSize="3xl">
          Welcome Back!
        </Text>
        <Text fontSize="xs" color="gray.500">
          Enter your credentials to access your account
        </Text>

        <Box p={4}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel fontSize={"xs"} color="gray.600">
                Email
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                value={formData?.email}
                name="email"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel fontSize={"xs"} color="gray.600">
                Password
              </FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData?.password}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="green"
              variant="solid"
              width="full"
              mt={6}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
      <Text fontSize="sm" mt={14}>
        Forgot your password ?{" "}
        <Link
          color="teal.500"
          href="forgot-password
      "
        >
          Reset Password
        </Link>
      </Text>
    </Flex>
  );
};

export default LoginPage;
