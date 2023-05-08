import { useEffect, useState } from "react";
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

const EditVendor = () => {
  const { id } = useParams();
  const { vendor } = useVendor(id);
  const [name, setName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategories, setSelectedSubcategories] = useState<number[]>(
    []
  );

  const [showError, setShowError] = useState(false);
  const { categories, isError } = useCategories();
  const { user } = useAuth();
  const { mutate } = useUpdateVendor();

  useEffect(() => {
    if (vendor) {
      setName(vendor.name);
      setContactNumber(vendor.contact);
      setSelectedCategory(vendor?.categories[0]?.id);
      setSelectedSubcategories(
        vendor?.subcategories.map((subcategory) => subcategory?.id)
      );
    }
  }, [vendor]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    if (selectedSubcategories.length === 0) {
      setShowError(true);
      return;
    }

    const data = {
      name,
      contact: contactNumber,
      categories: [Number(selectedCategory)],
      subcategories: selectedSubcategories,
      organization: user?.organizationId,
    };
    console.log("Form submitted with data:", data);
    mutate({ id, data });
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
          <FormToolbar backButtonLink="/vendors" pageTitle="Update Vendor" />

          <CustomInput
            label="Name"
            value={name}
            setValue={setName}
            placeholder="Name"
          />

          <CustomInput
            label="Contact Number"
            value={contactNumber}
            setValue={setContactNumber}
            placeholder="Contact Number"
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
            <FormControl
              id="SubCategory"
              display="flex"
              alignItems="flex-start"
            >
              <FormLabel width="20%">SubCategory</FormLabel>
              <CheckboxGroup
                value={selectedSubcategories}
                onChange={(values) => {
                  setSelectedSubcategories(values.map(Number));
                  setShowError(false);
                }}
              >
                <HStack spacing="5" width="auto" rounded={10} color="gray.600">
                  {categories
                    ?.filter((c) => c.parentId === Number(selectedCategory))
                    ?.map((sc) => (
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

export default EditVendor;
