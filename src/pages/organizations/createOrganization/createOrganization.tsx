import { useState } from "react";
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
import ImageUpload from "../../../components/form/imageUpload/imageUpload";
import AddressInputs from "../../../components/form/addressInputs/addressInputs";
import FormToolbar from "../../../components/form/formToolbar/formToolbar";
import CustomInput from "../../../components/form/customInput/customInput";

type Category = {
  id: number;
  name: string;
};

const organizations: Category[] = [
  { id: 1, name: "Furniture" },
  { id: 2, name: "Tables" },
  { id: 3, name: "Chairs" },
  { id: 4, name: "Electronics" },
  { id: 5, name: "Phones" },
  { id: 6, name: "Computers" },
];

const CreateOrganization = () => {
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [repName, setRepName] = useState<string>("");
  const [repContact, setRepContact] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      name,
      bio,
      address: `${address};${city};${zipCode};${selectedCountry}`,
      repName,
      repContact,
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
            backButtonLink="organizations"
            pageTitle="Create New Organization"
          ></FormToolbar>

          <ImageUpload
            name={"Organization's Logo"}
            onImageChange={(e) => setImage(e.target.files?.[0])}
          />

          <CustomInput
            label="Name of Organization"
            value={name}
            setValue={setName}
            placeholder="Name of Organization"
          />

          <CustomInput
            label="Bio"
            value={bio}
            setValue={setBio}
            placeholder="Bio"
            type="textarea"
          />

          <AddressInputs
            address={address}
            setAddress={setAddress}
            city={city}
            setCity={setCity}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            organizations={organizations}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />

          <CustomInput
            label="Representative Name"
            value={repName}
            setValue={setRepName}
            placeholder="Representative Name"
          />

          <CustomInput
            label="Representative Contact"
            value={repContact}
            setValue={setRepContact}
            placeholder="Representative Contact"
          />

          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateOrganization;
