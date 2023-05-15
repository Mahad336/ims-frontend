import { useEffect, useState, ChangeEvent } from "react";
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
import { Link, useParams } from "react-router-dom";
import ImageUpload from "../../../components/Form/ImageUpload/ImageUpload";
import AddressInputs from "../../../components/Form/AddressInputs/AddressInputs";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { AllCountries } from "../../../constant/AllCountries";
import { useUpdateOrganization } from "../../../hooks/Organizations/useUpdateOrganization";
import { objectToFormData } from "../../../utils/objectToFormData";
import { useOrganization } from "../../../hooks/Organizations/useOrganization";

type Country = {
  id: string;
  name: string;
};

const countries: Country[] = AllCountries;
const CreateOrganization = () => {
  const { mutate, error, isSuccess } = useUpdateOrganization();
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
  const { id } = useParams();
  const { organization } = useOrganization(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    console.log(formData);
    mutate({ id, orgData: objectToFormData(formData) });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    organization && setFormData(organization);
  }, [organization]);
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
          {organization && (
            <ImageUpload
              name={"Organization's Logo"}
              onImageChange={(e) =>
                setFormData({ ...formData, image: e.target.files?.[0] })
              }
              src={organization?.image}
            />
          )}
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
            handleChange={handleChange}
            formData={formData}
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
