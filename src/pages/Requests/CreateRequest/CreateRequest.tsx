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
import { ReqTypes } from "../../../constant/RequestTypes";

type Category = {
  id: number;
  name: string;
  parentId: number | null;
};

const categories: Category[] = [
  { id: 1, name: "Furniture", parentId: null },
  { id: 2, name: "Tables", parentId: 1 },
  { id: 3, name: "Chairs", parentId: 1 },
  { id: 4, name: "Electronics", parentId: null },
  { id: 5, name: "Phones", parentId: 4 },
  { id: 6, name: "Computers", parentId: 4 },
];

const CreateRequest = () => {
  const [title, setTitle] = useState<string>("");
  const [selectedRequestType, setSelectedRequesttype] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      title,
      description,
      category: selectedCategory,
      subcategory: selectedSubCategory,
      requestType: selectedRequestType,
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
            options={[
              { id: 1, name: ReqTypes.INVENTORY_AQUISITION },
              { id: 2, name: ReqTypes.REPAIRED },
              { id: 3, name: ReqTypes.REPLACED },
            ]}
          />

          <CustomInput
            label="Category"
            value={selectedCategory}
            setValue={setSelectedCategory}
            placeholder="Select Category"
            type="select"
            options={categories.filter((c) => c.parentId === null)}
          />

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
