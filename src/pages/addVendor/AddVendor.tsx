import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";

function AddVendorForm() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [category, setCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleContactNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactNumber(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleSubcategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedSubcategory = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSubcategories((prevSubcategories) => [
        ...prevSubcategories,
        selectedSubcategory,
      ]);
    } else {
      setSubcategories((prevSubcategories) =>
        prevSubcategories.filter(
          (subcategory) => subcategory !== selectedSubcategory
        )
      );
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // perform submit logic here
  };

  return (
    <Box mx="auto" mt="4" p={5} height="80vh" bg="whiteAlpha.900" rounded={10}>
      <Box display="flex" alignItems="center" mb="4">
        <Box as="a" href="/vendors" mr="4">
          Back
        </Box>
        <Box as="h2" fontWeight="bold" fontSize="lg" mr="auto">
          Add Vendor
        </Box>
        <Box>
          <Button variant="outline" mr="2">
            Cancel
          </Button>
          <Button colorScheme="green">Save</Button>
        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter vendor name"
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="tel"
            value={contactNumber}
            onChange={handleContactNumberChange}
            placeholder="Enter vendor contact number"
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Vendor Category</FormLabel>
          <Input
            type="text"
            value={category}
            onChange={handleCategoryChange}
            placeholder="Enter vendor category"
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Subcategories</FormLabel>
          <Checkbox value="subcategory1" onChange={handleSubcategoryChange}>
            Subcategory 1
          </Checkbox>
          <Checkbox value="subcategory2" onChange={handleSubcategoryChange}>
            Subcategory 2
          </Checkbox>
          <Checkbox value="subcategory3" onChange={handleSubcategoryChange}>
            Subcategory 3
          </Checkbox>
        </FormControl>
        <Button type="submit" colorScheme="green">
          Save
        </Button>
      </form>
    </Box>
  );
}

export default AddVendorForm;
