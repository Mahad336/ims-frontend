import React, { useState } from "react";
import {
  VStack,
  StackDivider,
  Spacer,
  Box,
  Button,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";

const AddSubcategories = () => {
  const [id, setId] = useState<number>();
  const [subCategories, setSubCategories] = useState<string[]>([""]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      id,
      subCategories,
    };
    console.log("Form submitted with data:", data);
  };

  const handleAddSubCategory = () => {
    setSubCategories([...subCategories, ""]);
  };

  const handleSubCategoryChange = (index: number, value: string) => {
    const newSubCategories = [...subCategories];
    newSubCategories[index] = value;
    setSubCategories(newSubCategories);
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
            pageTitle="Add New Sub-Category"
          />
          <Flex>
            <Text width="20%" fontWeight={"semibold"}>
              Category Name
            </Text>
            <Text>Electronics</Text>
          </Flex>

          <Heading fontWeight="medium">Sub-Categories</Heading>
          {subCategories.map((subCategory, index) => (
            <CustomInput
              key={index}
              label={`Sub-Category ${index + 1}`}
              value={subCategory}
              setValue={(value) => handleSubCategoryChange(index, value)}
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

export default AddSubcategories;
