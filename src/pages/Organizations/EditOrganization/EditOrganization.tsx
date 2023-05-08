import { useEffect, useState } from "react";
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
import { useCreateOrganization } from "../../../hooks/Organizations/useCreateOrganization";
import { useUpdateOrganization } from "../../../hooks/Organizations/useUpdateOrganization";
import { objectToFormData } from "../../../utils/objectToFormData";
import { useOrganization } from "../../../hooks/Organizations/useOrganization";

type Country = {
  id: string;
  name: string;
};

const countries: Country[] = AllCountries;
const EditOrganization = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [repName, setRepName] = useState<string>("");
  const [repContact, setRepContact] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const { mutate, error, isSuccess } = useUpdateOrganization();
  const { id } = useParams();
  const { organization } = useOrganization(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      name,
      email,
      bio,
      address,
      city,
      selectedCountry,
      country: selectedCountry,
      zip: zipCode,
      representativeName: repName,
      representativeContact: repContact,
      image,
    };

    mutate({ id, orgData: objectToFormData(data) });
  };

  useEffect(() => {
    if (organization) {
      setName(organization.name);
      setEmail(organization.email);
      setBio(organization.bio);
      setAddress(organization.address);
      setCity(organization.city);
      setSelectedCountry(organization.country);
      setZipCode(organization.zip);
      setRepName(organization.representativeName);
      setRepContact(organization.representativeContact);
    }
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
            pageTitle="Update Organization"
          ></FormToolbar>

          {organization && (
            <ImageUpload
              name={"Organization's Logo"}
              onImageChange={(e) => setImage(e.target.files?.[0])}
              src={organization?.image}
            />
          )}

          <CustomInput
            label="Name of Organization"
            value={name}
            setValue={setName}
            placeholder="Name of Organization"
          />
          <CustomInput
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder="Email"
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
            countries={countries}
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

export default EditOrganization;
