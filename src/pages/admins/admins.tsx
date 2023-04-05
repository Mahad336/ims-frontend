import React from "react";
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/customizeableTable/CustomizeableTable";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const Admins: React.FC = () => {
  const data: Item[] = [
    {
      id: 1,
      name: "Proabc",
      category: "Category 1",
      quantity: 10,
      price: 100,
    },
    {
      id: 2,
      name: "Prolmn 2",
      category: "Category 2",
      quantity: 5,
      price: 50,
    },
    {
      id: 3,
      name: "Inventorypolo 3",
      category: "Category 3",
      quantity: 20,
      price: 200,
    },
    {
      id: 4,
      name: "Inventoryion 4",
      category: "Category 3",
      quantity: 30,
      price: 100,
    },
  ];

  const heads: string[] = [
    "id",
    "name",
    "category",
    "quantity",
    "price",
    "Action",
  ];

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Admins</Heading>
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
        <CustomizeableTable
          heads={heads}
          data={data}
          filterable
          selectFilter={["name", "category", "quantity"]}
        />
      </Box>
    </>
  );
};

export default Admins;
