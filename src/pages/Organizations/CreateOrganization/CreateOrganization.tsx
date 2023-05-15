import { useState, ChangeEvent } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  StackDivider,
  Flex,
  Textarea,
  Spacer,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ImageUpload from "../../../components/Form/ImageUpload/ImageUpload";
import AddressInputs from "../../../components/Form/AddressInputs/AddressInputs";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { AllCountries } from "../../../constant/AllCountries";
import { useCreateOrganization } from "../../../hooks/Organizations/useCreateOrganization";

type Country = {
  id: string;
  name: string;
};

const countries: Country[] = AllCountries;
const CreateOrganization = () => {
  const { mutate, error, isSuccess } = useCreateOrganization();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    representativeName: "",
    representativeContact: " ",
    image: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    mutate(formData);
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
            backButtonLink="organizations"
            pageTitle="Create New Organization"
          ></FormToolbar>

          <ImageUpload
            name={"Organization's Logo"}
            onImageChange={(e) =>
              setFormData({ ...formData, image: e.target.files?.[0] })
            }
          />

          <CustomInput
            value={formData.name}
            label="Name of Organization"
            name="name"
            placeholder="Name of Organization"
            handleChange={handleChange}
          />
          <CustomInput
            value={formData.email}
            label="Email"
            name="email"
            placeholder="Email"
            handleChange={handleChange}
          />

          <CustomInput
            value={formData.bio}
            label="Bio"
            name="bio"
            placeholder="Bio"
            type="textarea"
            handleChange={handleChange}
          />

          <AddressInputs
            countries={countries}
            formData={formData}
            handleChange={handleChange}
          />

          <CustomInput
            value={formData.representativeName}
            name="representativeName"
            label="Representative Name"
            placeholder="Representative Name"
            handleChange={handleChange}
          />

          <CustomInput
            value={formData.representativeContact}
            name="representativeContact"
            label="Representative Contact"
            placeholder="Representative Contact"
            handleChange={handleChange}
          />

          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateOrganization;
