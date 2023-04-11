import React from "react";
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { CategoryTable } from "../../components/Table/CategoryTable/CategoryTable";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

interface Category {
  id: number;
  name: string;
  vendorsCount: number;
  subCategoryCount: number;
  subCategories: {}[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "Furniture",
    vendorsCount: 3,
    subCategoryCount: 2,
    subCategories: [
      {
        id: 6,
        name: "chair",
        vendorNames: ["Hanzla's furniture"],
        quantity: 1,
        assigned: 0,
        unassigned: 1,
        faulty: 1,
      },
      {
        id: 7,
        name: "table",
        vendorNames: [],
        quantity: 0,
        assigned: 0,
        unassigned: 0,
        faulty: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Vehicles",
    vendorsCount: 0,
    subCategoryCount: 1,
    subCategories: [
      {
        id: 8,
        name: "bike",
        vendorNames: [],
        quantity: 0,
        assigned: 0,
        unassigned: 0,
        faulty: 0,
      },
    ],
  },
];

const Categories: React.FC = () => {
  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Categories</Heading>
          <Spacer></Spacer>
          <Link to="create">
            <Button
              leftIcon={<AiOutlinePlus />}
              colorScheme="green"
              variant="solid"
            >
              Add
            </Button>
          </Link>
        </Flex>
        <CategoryTable categories={categories} />
      </Box>
    </>
  );
};

export default Categories;
