import React from "react";
import { VStack } from "@chakra-ui/react";
import CustomInput from "../CustomInput/CustomInput";

interface AddressProps {
  address: string;
  setAddress: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  countries: { id: string; name: string }[];
  zipCode: string;
  setZipCode: (value: string) => void;
}

export default function AddressInputs({
  address,
  setAddress,
  city,
  setCity,
  selectedCountry,
  setSelectedCountry,
  countries,
  zipCode,
  setZipCode,
}: AddressProps) {
  return (
    <VStack spacing={6}>
      <CustomInput
        label="Address"
        value={address}
        setValue={setAddress}
        placeholder="Address"
      />
      <CustomInput
        isRequired={false}
        value={city}
        setValue={setCity}
        placeholder="City"
      />
      <CustomInput
        isRequired={false}
        value={selectedCountry}
        setValue={setSelectedCountry}
        placeholder="Select Country"
        type="select"
        options={countries}
      />
      <CustomInput
        isRequired={false}
        value={zipCode}
        setValue={setZipCode}
        placeholder="Zip Code"
      />
    </VStack>
  );
}
