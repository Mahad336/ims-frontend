import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  VStack,
  StackDivider,
  Select,
  Flex,
  Spacer,
  Box,
  Heading,
  CheckboxGroup,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormToolbar from "../../../components/form/formToolbar/formToolbar";
import CustomInput from "../../../components/form/customInput/customInput";

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

const AddVendor = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategories, setSelectedSubcategories] = useState<number[]>(
    []
  );

  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    if (selectedSubcategories.length === 0) {
      setShowError(true);
      return;
    }

    const data = {
      name,
      contactNumber,
      category: selectedCategory,
      subcategories: selectedSubcategories,
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
          <FormToolbar backButtonLink="/Back" pageTitle="Add Vendor" />

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

          <CustomInput
            label="Category"
            value={selectedCategory}
            setValue={setSelectedCategory}
            placeholder="Select Category"
            type="select"
            options={categories.filter((c) => c.parentId === null)}
          />

          {selectedCategory && (
            <FormControl
              id="subcategory"
              display="flex"
              alignItems="flex-start"
            >
              <FormLabel width="20%">Subcategory</FormLabel>
              <CheckboxGroup
                key={Date.now()}
                value={selectedSubcategories}
                onChange={(values) => {
                  setSelectedSubcategories(values.map(Number));
                  setShowError(false);
                }}
              >
                <HStack spacing="5" width="auto" rounded={10} color="gray.600">
                  {categories
                    .filter((c) => c.parentId === Number(selectedCategory))
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
          Please select at least one subcategory.
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
