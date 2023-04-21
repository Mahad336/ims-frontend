import React, { FC, useState, useEffect } from "react";
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
import { useUpdatePassword } from "../../hooks/Auth/useUpdatePassword";
import { useNavigate } from "react-router-dom";

const ResetPassword: FC = () => {
  const [formData, setFormData] = useState<{
    password: string;
    confirmPassword: string;
  }>({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const { mutate, isSuccess, data, error: apiError } = useUpdatePassword();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsError(true);
      return;
    }
    mutate({ newPassword: formData.password });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
          Reset Password
        </Text>
        <Text fontSize="xs" color="gray.500">
          Enter your new password
        </Text>

        <Box p={4}>
          <form onSubmit={handleSubmit}>
            <FormControl mt={6}>
              <FormLabel fontSize={"xs"} color="gray.600">
                Password
              </FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel fontSize={"xs"} color="gray.600">
                Confirm Password
              </FormLabel>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Re-Enter password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </FormControl>

            {isError && <Text color="red">{error}</Text>}

            <Button
              type="submit"
              colorScheme="green"
              variant="solid"
              width="full"
              mt={6}
              mb={4}
            >
              Reset Password
            </Button>

            {isSuccess && (
              <Alert status="success" mb={4}>
                <AlertIcon />
                Password updated successfully.
              </Alert>
            )}
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default ResetPassword;
