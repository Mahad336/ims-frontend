import { useState, ChangeEvent, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  VStack,
  StackDivider,
  Spacer,
  Box,
  CheckboxGroup,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { useCategories } from "../../../hooks/Categories/useCategories";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { useCreateVendor } from "../../../hooks/Vendors/useCreateVendor";
import { useUpdateVendor } from "../../../hooks/Vendors/useUpdateVendor";
import { useParams } from "react-router-dom";
import { useVendor } from "../../../hooks/Vendors/useVendor";

const AddVendor = () => {
  const [showError, setShowError] = useState(false);
  const { categories } = useCategories();
  const { user } = useAuth();
  const { mutate, error } = useUpdateVendor();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    categories: "",
    subcategories: [],
    organization: user?.organizationId,
  });
  const { id } = useParams();
  const { vendor } = useVendor(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    if (formData.subcategories.length === 0) {
      setShowError(true);
      return;
    }

    mutate({
      id,
      data: { ...formData, categories: [Number(formData.categories)] },
    });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (vendor) {
      setFormData(vendor);
    }
  }, [vendor]);

  return (
    <Box bg="whiteAlpha.900 " p="5" rounded={10}>
      <form action="submit" onSubmit={handleSubmit}>
        <VStack
          mt="6"
          divider={<StackDivider borderColor="gray.300" />}
          align="stretch"
          spacing={8}
        >
          <FormToolbar backButtonLink="/vendors" pageTitle="Update Vendor" />

          <CustomInput
            label="Name"
            value={formData.name}
            name="name"
            handleChange={handleChange}
            placeholder="Name"
          />

          <CustomInput
            label="Contact Number"
            value={formData.contact}
            name="contact"
            handleChange={handleChange}
            placeholder="Contact Number"
          />

          {categories && (
            <CustomInput
              label="Category"
              value={formData.categories}
              name="categories"
              handleChange={handleChange}
              placeholder="Select Category"
              type="select"
              options={categories.filter((c) => c.parentId === null)}
            />
          )}

          {formData.categories && (
            <FormControl
              id="SubCategory"
              display="flex"
              alignItems="flex-start"
            >
              <FormLabel width="20%">SubCategory</FormLabel>
              <CheckboxGroup
                value={formData.subcategories}
                onChange={(values) => {
                  setFormData({
                    ...formData,
                    subcategories: values.map(Number),
                  });
                  setShowError(false);
                }}
              >
                <HStack spacing="5" width="auto" rounded={10} color="gray.600">
                  {categories
                    ?.filter(
                      (c) => c?.parentId === Number(formData?.categories)
                    )
                    .map((sc) => (
                      <Checkbox key={sc.id} value={sc.id} colorScheme="gray">
                        {sc.name}
                      </Checkbox>
                    ))}
                </HStack>
              </CheckboxGroup>
            </FormControl>
          )}
          <Spacer></Spacer>
        </VStack>
      </form>
      {showError && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          Please select at least one SubCategory.
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setShowError(false)}
          />
        </Alert>
      )}
    </Box>
  );
};

export default AddVendor;
