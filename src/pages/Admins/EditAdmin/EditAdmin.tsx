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
import { Link, useParams } from "react-router-dom";
import ImageUpload from "../../../components/Form/ImageUpload/ImageUpload";
import CredentialForm from "../../../components/Form/CredentialsForm/CredentialForm";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";

type Organization = {
  id: number;
  name: string;
};

const organizations: Organization[] = [
  { id: 1, name: "Furniture" },
  { id: 2, name: "Tables" },
  { id: 3, name: "Chairs" },
  { id: 4, name: "Electronics" },
  { id: 5, name: "Phones" },
  { id: 6, name: "Computers" },
];

const EditAdmin = () => {
  const { id } = useParams();
  console.log(id);

  const [name, setName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      contact,
      image,
    };
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
            backButtonLink={"/requests/" + id}
            pageTitle="Edit Admin"
          />

          <ImageUpload
            name={"Admins's Profile Pic"}
            onImageChange={(e) => setImage(e.target.files?.[0])}
          />

          <CustomInput
            label="Name"
            value={name}
            placeholder="Full Name"
            setValue={setName}
          />

          <CustomInput
            label="Organization"
            value={organization}
            placeholder="Select Organization"
            type="select"
            options={organizations}
            setValue={setOrganization}
          />

          <CustomInput
            label="Contact Number"
            value={contact}
            placeholder="Representative Contact"
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

export default EditAdmin;
