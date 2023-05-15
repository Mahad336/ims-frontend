import { FC, useState, ChangeEvent } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    password: "",
    contact: "",
    imageFile: null,
    organization: user?.organizationId,
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
            backButtonLink="/employees"
            pageTitle="Add New Employee"
          />

          <ImageUpload
            name={"Employee's Picture"}
            onImageChange={(e) =>
              setFormData({ ...formData, imageFile: e.target.files?.[0] })
            }
          />

          <CustomInput
            label="Name"
            value={formData.name}
            name="name"
            placeholder="Full Name"
            handleChange={handleChange}
          />

          <CustomInput
            name="department"
            label="Department"
            value={formData.department}
            placeholder="Select Department"
            type="select"
            options={departments}
            handleChange={handleChange}
            useNameAsValue
          />

          <CustomInput
            name="contact"
            label="Contact Number"
            value={formData.contact}
            placeholder="Representative Contact"
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

export default CreateEmployee;
