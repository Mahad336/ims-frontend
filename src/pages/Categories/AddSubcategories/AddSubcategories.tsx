import React, { useState, ChangeEvent, useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useCreateCategory } from "../../../hooks/Categories/useCreateCategory";
import { useCategory } from "../../../hooks/Categories/useCategory";
import { useUpdateCategory } from "../../../hooks/Categories/useUpdateCategory";

const AddSubCategories = () => {
  const { user } = useAuth();
  const { mutate, isSuccess, error } = useUpdateCategory();
  const [formData, setFormData] = useState({
    name: "",
    subcategories: [],
    organization: user?.organizationId,
  });
  const { id } = useParams();
  const { category } = useCategory(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ id, categoryData: formData });
    console.log("Form submitted with data:", formData);
  };

  const handleAddSubCategory = () => {
    setFormData({
      ...formData,
      subcategories: [...formData.subcategories, ""],
    });
  };

  const handleSubCategoryChange = (index: number, value: string) => {
    const newsubcategories = [...formData.subcategories];
    newsubcategories[index] = value;
    setFormData({ ...formData, subcategories: newsubcategories });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (category) {
      setFormData({
        ...formData,
        name: category.name,
        subcategories: category?.subcategories?.map((sc) => sc?.name),
      });
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
            pageTitle="Add Sub Category"
          />
          <Flex>
            <Text width="20%" fontWeight={"semibold"}>
              Category Name
            </Text>
            <Text>{category?.name}</Text>
          </Flex>

          <Heading fontWeight="medium">Sub-Categories</Heading>
          {formData.subcategories.map((subCategory, index) => (
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

export default AddSubCategories;
