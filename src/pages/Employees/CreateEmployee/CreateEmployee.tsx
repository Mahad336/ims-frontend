import { FC, useState } from "react";
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
import { useAuth } from "../../../hooks/Auth/useAuth";

type Department = {
  id: number;
  name: string;
};

const departments: Department[] = [
  { id: 1, name: "Development" },
  { id: 2, name: "QA" },
  { id: 3, name: "Sales" },
  { id: 4, name: "Research" },
  { id: 5, name: "Artifical Intelligence" },
  { id: 6, name: "Human Resource" },
];

const CreateEmployee: FC = () => {
  const [name, setName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const { mutate } = useCreateUser();
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      contact,
      organization: user?.organizationId,
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
            backButtonLink="/employees"
            pageTitle="Add New Employee"
          />

          <ImageUpload
            name={"Employee's Picture"}
            onImageChange={(e) => setImage(e.target.files?.[0])}
          />

          <CustomInput
            label="Name"
            value={name}
            placeholder="Full Name"
            setValue={setName}
          />

          <CustomInput
            label="Department"
            value={department}
            placeholder="Select Department"
            type="select"
            options={departments}
            setValue={setDepartment}
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

export default CreateEmployee;
