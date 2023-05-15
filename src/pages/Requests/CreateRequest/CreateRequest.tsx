import { useState, ChangeEvent } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  StackDivider,
  Select,
  Flex,
  Textarea,
  Spacer,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { ReqTypes, ReqTypesArray } from "../../../constant/RequestTypes";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useItems } from "../../../hooks/Inventory/useItems";
import { useCategories } from "../../../hooks/Categories/useCategories";
import { useCreateRequest } from "../../../hooks/Requests/useCreateRequest";

const CreateRequest = () => {
  const { user } = useAuth();
  const { categories } = useCategories();
  const { items } = useItems();
  const { mutate, isSuccess, error } = useCreateRequest();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    organization: user?.organizationId,
    submittedBy: user?.id,
    item: "",
    category: "",
    subcategory: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    mutate({ ...formData, item: Number(formData.item) });
    console.log("Form submitted with data:", formData);
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
            backButtonLink="/requests"
            pageTitle="Create New Request"
          />

          <CustomInput
            label="Title"
            value={formData.title}
            name="title"
            handleChange={handleChange}
            placeholder="Title"
          />

          <CustomInput
            label="Request Type"
            value={formData.type}
            name="type"
            handleChange={handleChange}
            placeholder="Select Request"
            type="select"
            options={ReqTypesArray}
            useNameAsValue
          />
          {categories && (
            <CustomInput
              label="Category"
              value={formData.category}
              name="category"
              handleChange={handleChange}
              placeholder="Select Category"
              type="select"
              options={categories.filter((c) => c.parentId === null)}
            />
          )}

          {formData.category && (
            <CustomInput
              label="Sub Category"
              value={formData.subcategory}
              name="subcategory"
              handleChange={handleChange}
              placeholder="Select SubCategory"
              type="select"
              options={categories.filter(
                (c) => c.parentId === Number(formData.category)
              )}
            />
          )}

          {categories && formData.subcategory && items && (
            <CustomInput
              label="Select Item"
              value={formData.item}
              name="item"
              handleChange={handleChange}
              placeholder="Select Item"
              type="select"
              options={items.filter(
                (item) =>
                  item.subCategory ===
                  categories.find((cat) => cat.id == formData.subcategory).name
              )}
            />
          )}
          <CustomInput
            label="Description"
            value={formData.description}
            name="description"
            handleChange={handleChange}
            placeholder="Description"
            type="textarea"
          />

          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateRequest;
