import React from "react";
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { CategoryTable } from "../../components/Table/CategoryTable/CategoryTable";
import { Link } from "react-router-dom";
import { useCategoryStats } from "../../hooks/Categories/useCategoriesStats";

interface Category {
  id: number;
  name: string;
  vendorsCount: number;
  subCategoryCount: number;
  subCategories: {}[];
}

const Categories: React.FC = () => {
  const { categoryTableStats: categories, isSuccess } = useCategoryStats();

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
        {isSuccess && <CategoryTable categories={categories ?? []} />}
      </Box>
    </>
  );
};

export default Categories;
