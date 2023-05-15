import React, { FC } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Text,
  Heading,
  Input,
} from "@chakra-ui/react";
import CustomInput from "../CustomInput/CustomInput";

type Props = {
  email: string;
  password: string;
  handleChange: any;
};

const CredentialForm: FC<Props> = ({
  email = "",
  password = "",
  handleChange,
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

      <CustomInput
        name="email"
        label="Email Address"
        placeholder="Email Address"
        value={email}
        handleChange={handleChange}
      />
      <CustomInput
        name="password"
        label="Password"
        placeholder="Password"
        value={password}
        handleChange={handleChange}
      />
    </VStack>
  );
};

export default CredentialForm;
