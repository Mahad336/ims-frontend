import React, { FC } from "react";
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

const ResetPassword: FC = () => {
  return (
    <Flex
      overflowY="hidden"
      height="auto"
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
              <Input type="password" placeholder="Enter Password" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel fontSize={"xs"} color="gray.600">
                Password
              </FormLabel>
              <Input type="password" placeholder="Re-Enter password" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel fontSize={"xs"} color="gray.600">
                OTP
              </FormLabel>
              <Input
                type="number"
                placeholder="Enter OTP received on your email"
              />
            </FormControl>
            <Button
              colorScheme="green"
              variant="solid"
              width="full"
              mt={6}
              mb={4}
            >
              Reset Password
            </Button>
          </form>
        </Box>
      </Box>
      <Text fontSize="sm" mt={14}>
        OTP not Received ?{" "}
        <Link color="teal.500" href="reset">
          Resend
        </Link>
      </Text>
    </Flex>
  );
};

export default ResetPassword;
