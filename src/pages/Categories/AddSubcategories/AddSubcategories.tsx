import React, { useState, useEffect } from "react";
import {
  VStack,
  StackDivider,
  Spacer,
  Box,
  Flex,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useCreateCategory } from "../../../hooks/Categories/useCreateCategory";
import { useUpdateCategory } from "../../../hooks/Categories/useUpdateCategory";
import { useCategory } from "../../../hooks/Categories/useCategory";

const AddCategories = () => {
  const [subCategories, setSubCategories] = useState<string[]>([""]);
  const { user } = useAuth();
  const { mutate, isSuccess, error } = useUpdateCategory();
  const { id } = useParams();
  const { category } = useCategory(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      subCategories,
      organization: user?.organizationId,
    };
    mutate({ id, categoryData: data });
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

  useEffect(() => {
    if (category) {
      setSubCategories(
        category.subcategories.map((subcategory) => subcategory.name)
      );
    }
  }, [category]);

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
            pageTitle="Add Sub-categories"
          />
          <Flex>
            <Text width="20%" fontWeight={"semibold"}>
              Category Name
            </Text>
            <Text>{category?.name}</Text>
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

export default AddCategories;
