import React from "react";
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

const LoginPage = () => {
  return (
    <Flex
      height="80vh"
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
          <form>
            <FormControl>
              <FormLabel fontSize={"xs"} color="gray.600">
                Email
              </FormLabel>
              <Input type="email" placeholder="Enter email" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel fontSize={"xs"} color="gray.600">
                Password
              </FormLabel>
              <Input type="password" placeholder="Enter password" />
            </FormControl>
            <Button colorScheme="green" variant="solid" width="full" mt={6}>
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
