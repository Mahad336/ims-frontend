import React, { useState, ChangeEvent } from "react";
import {
  VStack,
  StackDivider,
  Spacer,
  Box,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useCreateCategory } from "../../../hooks/Categories/useCreateCategory";

const AddCategories = () => {
  const { user } = useAuth();
  const { mutate, isSuccess, error } = useCreateCategory();
  const [formData, setFormData] = useState({
    name: "",
    subCategories: [],
    organization: user?.organizationId,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(formData);
    console.log("Form submitted with data:", formData);
  };

  const handleAddSubCategory = () => {
    setFormData({
      ...formData,
      subCategories: [...formData.subCategories, ""],
    });
  };

  const handleSubCategoryChange = (index: number, value: string) => {
    const newSubCategories = [...formData.subCategories];
    newSubCategories[index] = value;
    setFormData({ ...formData, subCategories: newSubCategories });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box bg="whiteAlpha.900 " p="5" rounded={10}>
      <form onSubmit={handleSubmit}>
        <VStack
          mt="6"
          divider={<StackDivider borderColor="gray.300" />}
          align="stretch"
          spacing={8}
        >
          <FormToolbar
            backButtonLink="/categories"
            pageTitle="Add New Category"
          />
          <CustomInput
            label="Name"
            name="name"
            value={formData.name}
            handleChange={handleChange}
            placeholder="Name"
          />
          <Heading fontWeight="medium">Sub-Categories</Heading>
          {formData.subCategories.map((subCategory, index) => (
            <CustomInput
              key={index}
              label={`Sub-Category ${index + 1}`}
              value={subCategory}
              handleChange={(e) =>
                handleSubCategoryChange(index, e.target.value)
              }
              placeholder={`Sub-Category ${index + 1}`}
            />
          ))}
          <Button
            colorScheme="green"
            onClick={handleAddSubCategory}
            size="md"
            width="max-content"
          >
            + Add Sub-category
          </Button>
          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default AddCategories;
