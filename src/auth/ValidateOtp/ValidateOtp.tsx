import React, { useState, useEffect } from "react";
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

const ValidateOtp = () => {
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState<number>(60);
  const [otp, setOtp] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleResend = () => {
    // code to resend OTP
    setResendDisabled(true);
    setTimer(60);
    console.log("here");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // code to verify OTP
    console.log({ otp });
  };

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
      minHeight="85vh"
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
        rounded="2xl"
      >
        <Text as="b" fontSize="3xl">
          Verification Code
        </Text>
        <Text pt={3} fontSize="xs" color="gray.500" maxW="xs" margin="auto">
          Enter below your OTP that has been sent to your email
        </Text>

        <Box p={4}>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel fontSize={"xs"} color="gray.600">
                Verification Code
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
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
              Enter Verification Code
            </Button>
          </form>
          <Box mt={4}>
            <Text fontSize="xs" color="gray.500">
              Didn't receive the OTP?
            </Text>
            <Button
              size="sm"
              colorScheme="teal"
              variant="outline"
              m={4}
              isDisabled={resendDisabled}
              onClick={handleResend}
            >
              {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ValidateOtp;
