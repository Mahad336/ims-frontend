import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { useItems } from "../../hooks/Inventory/useItems";
import { itemHeads } from "../../constant/tableHeads";

const Inventory: React.FC = () => {
  const { items } = useItems();

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Inventory</Heading>
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
        {items && (
          <CustomizeableTable
            heads={itemHeads}
            data={items}
            filterable
            selectFilter={["name", "category", "subCategory"]}
            viewLink="inventory"
          />
        )}
      </Box>
    </>
  );
};

export default Inventory;
