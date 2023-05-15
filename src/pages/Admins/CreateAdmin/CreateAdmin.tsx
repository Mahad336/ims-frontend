import { useState, ChangeEvent } from "react";
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
  const { organizations } = useOrganizations();
  const { mutate, isSuccess, error } = useCreateUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    organization: "",
    contact: "",
    imageFile: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    mutate(formData);
    console.log("Form submitted with data:", formData);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            onImageChange={(e) =>
              setFormData({ ...formData, imageFile: e.target.files?.[0] })
            }
          />

          <CustomInput
            name="name"
            label="Name"
            value={formData?.name}
            placeholder="Full Name"
            handleChange={handleChange}
          />
          {organizations && (
            <CustomInput
              label="Organization"
              name="organization"
              value={formData?.organization}
              placeholder="Select Organization"
              type="select"
              options={organizations}
              handleChange={handleChange}
            />
          )}
          <CustomInput
            name="contact"
            label="Contact Number"
            value={formData.contact}
            placeholder="Contact"
            handleChange={handleChange}
          />

          <CredentialForm
            email={formData.email}
            password={formData.password}
            handleChange={handleChange}
          />

          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateAdmin;
