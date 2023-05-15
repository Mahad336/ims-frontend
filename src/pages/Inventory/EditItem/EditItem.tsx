import { useState, ChangeEvent, useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useCategories } from "../../../hooks/Categories/useCategories";
import { useVendors } from "../../../hooks/Vendors/useVendors";
import { useCreateItem } from "../../../hooks/Inventory/useCreateItem";
import { useItem } from "../../../hooks/Inventory/useItem";
import { getUpdatedFormData } from "../../../utils/getUpdatedFormData";
import { useUpdateItem } from "../../../hooks/Inventory/useUpdateItem";

const CreateItem = () => {
  const { user } = useAuth();
  const { categories } = useCategories();
  const { vendors } = useVendors();
  const { mutate, isSuccess, error } = useUpdateItem();
  const { id } = useParams();
  const { item } = useItem(id);

  const [formData, setFormData] = useState({
    name: "",
    serialNumber: "",
    unitPrice: "",
    currentPrice: "",
    vendor: "",
    description: "",
    category: "",
    subcategory: "",
    organization: user?.organizationId,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    mutate({
      id,
      itemData: {
        ...formData,
        unitPrice: Number(formData.unitPrice),
        currentPrice: Number(formData.unitPrice),
        vendor: Number(formData.vendor),
        category: Number(formData.category),
        subcategory: Number(formData.subcategory),
      },
    });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (item) {
      setFormData(getUpdatedFormData(formData, item));
    }
  }, [item]);

  return (
    <Box bg="whiteAlpha.900 " p="5" rounded={10}>
      <form action="submit" onSubmit={handleSubmit}>
        <VStack
          mt="6"
          divider={<StackDivider borderColor="gray.300" />}
          align="stretch"
          spacing={8}
        >
          <FormToolbar backButtonLink="/inventory" pageTitle="Update Item" />

          <CustomInput
            label="Item Name"
            value={formData.name}
            name="name"
            handleChange={handleChange}
            placeholder="Item Name"
          />

          <CustomInput
            label="Serial Number"
            name="serialNumber"
            value={formData.serialNumber}
            handleChange={handleChange}
            placeholder="Serial Number"
          />

          <CustomInput
            label="Description"
            name="description"
            value={formData.description}
            handleChange={handleChange}
            placeholder="Description"
            type="textarea"
          />
          {vendors && (
            <CustomInput
              label="Select Vendor"
              value={formData.vendor}
              name="vendor"
              handleChange={handleChange}
              placeholder="Select Vendor"
              type="select"
              options={vendors}
            />
          )}

          {categories && formData.vendor && vendors && (
            <CustomInput
              label="Category"
              value={formData.category}
              handleChange={handleChange}
              name="category"
              placeholder="Select Category"
              type="select"
              options={categories?.filter(
                (c) =>
                  c?.parentId == null &&
                  vendors
                    ?.find((vendor) => vendor?.id == Number(formData?.vendor))
                    ?.categories?.includes(c?.id)
              )}
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
              options={categories?.filter(
                (c) => c.parentId === Number(formData.category)
              )}
            />
          )}

          <CustomInput
            label="Price"
            name="unitPrice"
            value={formData.unitPrice}
            handleChange={handleChange}
            placeholder="Price"
          />
          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateItem;
