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
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useCategories } from "../../../hooks/Categories/useCategories";
import { useVendors } from "../../../hooks/Vendors/useVendors";
import { useCreateItem } from "../../../hooks/Inventory/useCreateItem";

const CreateItem = () => {
  const [itemName, setItemName] = useState<string>("");
  const [serialNumber, setSerialNumber] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedVendor, setSelectedVendor] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { user } = useAuth();
  const { categories } = useCategories();
  const { vendors } = useVendors();
  const { mutate, isSuccess, error } = useCreateItem();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      name: itemName,
      serialNumber,
      unitPrice: Number(price),
      currentPrice: Number(price),
      vendor: Number(selectedVendor),
      description,
      category: Number(selectedCategory),
      subcategory: Number(selectedSubCategory),
      organization: user?.organizationId,
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
          {vendors && (
            <CustomInput
              label="Select Vendor"
              value={selectedVendor}
              setValue={setSelectedVendor}
              placeholder="Select Vendor"
              type="select"
              options={vendors}
            />
          )}

          {categories && selectedVendor && vendors && (
            <CustomInput
              label="Category"
              value={selectedCategory}
              setValue={setSelectedCategory}
              placeholder="Select Category"
              type="select"
              options={categories?.filter(
                (c) =>
                  c?.parentId == null &&
                  vendors
                    ?.find((vendor) => vendor?.id == Number(selectedVendor))
                    ?.categories?.includes(c?.id)
              )}
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
