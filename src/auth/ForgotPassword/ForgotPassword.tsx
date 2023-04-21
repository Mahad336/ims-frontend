import React, { FC, useEffect, useState } from "react";
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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useSendResetPassword } from "../../hooks/Auth/useSendResetPasswordEmail";
import useOtpEmail from "../../hooks/Auth/useOtpEmail";

const ForgotPassword: FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { mutate, isSuccess } = useSendResetPassword();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Flex
      overflowY="hidden"
      minHeight="80vh"
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
          Forgot Password?
        </Text>
        <Text pt={3} fontSize="xs" color="gray.500" maxW="xs" margin="auto">
          Enter below your email and a verification code will be sent to your
          email
        </Text>

        <Box p={4}>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel fontSize={"xs"} color="gray.600">
                Email
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="green"
              variant="solid"
              width="full"
              mt={6}
              mb={4}
            >
              Send Verification Code
            </Button>
            {isSuccess && (
              <Alert status="success" mb={4}>
                <AlertIcon />
                OTP sent successfully
              </Alert>
            )}
          </form>
        </Box>
      </Box>
      <Text fontSize="sm" mt={14}>
        Entered Wrong Credentials ??? Go back to{" "}
        <Link color="teal.500" href="login">
          Login
        </Link>
      </Text>
    </Flex>
  );
};

export default ForgotPassword;
