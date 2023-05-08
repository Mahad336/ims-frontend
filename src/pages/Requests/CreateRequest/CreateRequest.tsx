import { useState } from "react";
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
  const [title, setTitle] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<number | string>("");
  const [selectedRequestType, setSelectedRequesttype] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const { user } = useAuth();
  const { categories } = useCategories();
  const { items } = useItems();
  const { mutate, isSuccess, error } = useCreateRequest();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      title,
      description,
      type: selectedRequestType,
      organization: user?.organizationId,
      submittedBy: user?.id,
      item: Number(selectedItem),
    };
    mutate(data);
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
            backButtonLink="/requests"
            pageTitle="Create New Request"
          />

          <CustomInput
            label="Title"
            value={title}
            setValue={setTitle}
            placeholder="Title"
          />

          <CustomInput
            label="Request Type"
            value={selectedRequestType}
            setValue={setSelectedRequesttype}
            placeholder="Select Request"
            type="select"
            options={ReqTypesArray}
            useNameAsValue
          />
          {categories && (
            <CustomInput
              label="Category"
              value={selectedCategory}
              setValue={setSelectedCategory}
              placeholder="Select Category"
              type="select"
              options={categories.filter((c) => c.parentId === null)}
            />
          )}

          {selectedCategory && (
            <CustomInput
              label="Sub Category"
              value={selectedSubCategory}
              setValue={setSelectedSubCategory}
              placeholder="Select SubCategory"
              type="select"
              options={categories.filter(
                (c) => c.parentId === Number(selectedCategory)
              )}
            />
          )}

          {categories && selectedSubCategory && items && (
            <CustomInput
              label="Select Item"
              value={selectedItem}
              setValue={setSelectedItem}
              placeholder="Select Item"
              type="select"
              options={items.filter(
                (item) =>
                  item.subCategory ===
                  categories.find((cat) => cat.id == selectedSubCategory).name
              )}
            />
          )}
          <CustomInput
            label="Description"
            value={description}
            setValue={setDescription}
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
