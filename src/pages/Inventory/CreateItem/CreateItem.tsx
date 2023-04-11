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

type Category = {
  id: number;
  name: string;
  parentId: number | null;
};
type Vendor = {
  id: number;
  name: string;
};

const categories: Category[] = [
  { id: 1, name: "Furniture", parentId: null },
  { id: 2, name: "Tables", parentId: 1 },
  { id: 3, name: "Chairs", parentId: 1 },
  { id: 4, name: "Electronics", parentId: null },
  { id: 5, name: "Phones", parentId: 4 },
  { id: 6, name: "Computers", parentId: 4 },
];

const vendors = [
  { id: 1, name: "Mahad Supplier" },
  { id: 2, name: "Hanzla Supplier" },
  { id: 3, name: "Abdullah Supplier" },
];

const CreateItem = () => {
  const [itemName, setItemName] = useState<string>("");
  const [serialNumber, setSerialNumber] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedVendor, setSelectedVendor] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      itemName,
      serialNumber,
      price,
      vendor: selectedVendor,
      description,
      category: selectedCategory,
      SubCategory: selectedSubCategory,
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
            backButtonLink="/inventory"
            pageTitle="Create New Item"
          />

          <CustomInput
            label="Item Name"
            value={itemName}
            setValue={setItemName}
            placeholder="Item Name"
          />

          <CustomInput
            label="Serial Number"
            value={serialNumber}
            setValue={setSerialNumber}
            placeholder="Serial Number"
          />

          <CustomInput
            label="Description"
            value={description}
            setValue={setDescription}
            placeholder="Description"
            type="textarea"
          />

          <CustomInput
            label="Request Type"
            value={selectedVendor}
            setValue={setSelectedVendor}
            placeholder="Select Request"
            type="select"
            options={vendors}
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
            label="Price"
            value={price}
            setValue={setPrice}
            placeholder="Price"
          />
          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateItem;
