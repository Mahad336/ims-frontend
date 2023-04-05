import React, { FC } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Text,
  Heading,
  Input,
} from "@chakra-ui/react";

type Props = {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
};

const CredentialForm: FC<Props> = ({
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <VStack gap={3} alignItems="flex-start">
      <Heading size="lg" fontWeight="semi-bold">
        Credentials
      </Heading>
      <Text>
        Below are one time created credentials.These will be sent to the
        mentioned email
      </Text>
      <FormControl display="flex" alignItems="baseline" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="gray.400"
          type="text"
          value={email}
          width="auto"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          rounded={10}
          ml={[5, 20, 180]}
          flex="0 1 30vw"
        />
      </FormControl>
      <FormControl display="flex" alignItems="baseline" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          focusBorderColor="gray.400"
          type="text"
          value={password}
          width="auto"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          rounded={10}
          ml={[5, 20, 215]}
          flex="0 1 30vw"
        />
      </FormControl>
    </VStack>
  );
};

export default CredentialForm;
