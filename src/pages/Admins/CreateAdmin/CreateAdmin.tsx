import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  StackDivider,
  Flex,
  Spacer,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ImageUpload from "../../../components/Form/ImageUpload/ImageUpload";
import CredentialForm from "../../../components/Form/CredentialsForm/CredentialForm";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import { useCreateUser } from "../../../hooks/Users/useCreateUser";
import { useOrganizations } from "../../../hooks/Organizations/useOrganizations";

const CreateAdmin = () => {
  const [name, setName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const { organizations } = useOrganizations();
  const { mutate, isSuccess, error } = useCreateUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      organization,
      contact,
      imageFile: image,
    };
    mutate(data);
    console.log("Form submitted with data:", data);
  };

  return (
    <Box bg="whiteAlpha.900 " p="5" rounded={10}>
      <form action="submit" onSubmit={handleSubmit}>
        <VStack
          mt="6"
          divider={<StackDivider borderColor="gray.300" />}
          align="stretch"
          spacing={8}
        >
          <FormToolbar
            backButtonLink="/requests"
            pageTitle="Create New Admin"
          />

          <ImageUpload
            name={"Admin Profile Picture"}
            onImageChange={(e) => setImage(e.target.files?.[0])}
          />

          <CustomInput
            label="Name"
            value={name}
            placeholder="Full Name"
            setValue={setName}
          />
          {organizations && (
            <CustomInput
              label="Organization"
              value={organization}
              placeholder="Select Organization"
              type="select"
              options={organizations}
              setValue={setOrganization}
            />
          )}
          <CustomInput
            label="Contact Number"
            value={contact}
            placeholder="Contact"
            setValue={setContact}
          />

          <CredentialForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />

          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateAdmin;
