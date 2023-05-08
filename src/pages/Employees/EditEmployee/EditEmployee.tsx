import { FC, useEffect, useState } from "react";
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
import { useCreateUser } from "../../../hooks/Users/useCreateUser";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useUpdateUser } from "../../../hooks/Users/useUpdateUser";
import { useUser } from "../../../hooks/Users/useFetchUser";

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

const EditEmployee: FC = () => {
  const [name, setName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const { mutate } = useUpdateUser();
  const { user } = useAuth();
  const { id } = useParams();
  const { user: userDetail } = useUser(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      contact,
      department,
      organization: user?.organizationId,
      imageFile: image,
    };
    mutate({ id, userData: data });
    console.log("Form submitted with data:", data);
  };

  useEffect(() => {
    if (userDetail) {
      setName(userDetail?.name);
      setEmail(userDetail.email);
      setContact(userDetail.contact);
      setDepartment(userDetail.department);
    }
  }, [userDetail]);

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
            pageTitle="Update Employee"
          />
          {userDetail && (
            <ImageUpload
              name={"Employee's Picture"}
              onImageChange={(e) => setImage(e.target.files?.[0])}
              src={userDetail?.image}
            />
          )}
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
            useNameAsValue
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

export default EditEmployee;
