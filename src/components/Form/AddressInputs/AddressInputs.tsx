import React from "react";
import { VStack } from "@chakra-ui/react";
import CustomInput from "../CustomInput/CustomInput";

interface AddressProps {
  countries?: { id: string; name: string }[];
  handleChange?: (value) => void;
  formData?: any;
}

export default function AddressInputs({
  countries,
  handleChange,
  formData,
}: AddressProps) {
  return (
    <VStack spacing={6}>
      <CustomInput
        label="Address"
        name="address"
        value={formData.address}
        placeholder="Address"
        handleChange={handleChange}
      />
      <CustomInput
        isRequired={false}
        name="city"
        value={formData.city}
        placeholder="City"
        handleChange={handleChange}
      />
      <CustomInput
        name="country"
        isRequired={false}
        value={formData.country}
        placeholder="Select Country"
        type="select"
        options={countries}
        handleChange={handleChange}
      />
      <CustomInput
        name="zip"
        isRequired={false}
        value={formData.zip}
        placeholder="Zip Code"
        handleChange={handleChange}
      />
    </VStack>
  );
}
