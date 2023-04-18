import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const VendorDetail: FC = () => {
  const subCategories = [
    "Laptop",
    "Mouse",
    "KeyBoard",
    "Headphones",
    "Charges",
    "Monitors",
  ];

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

  const heads: string[] = ["id", "name", "category", "quantity", "price"];
  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
        spacing={8}
      >
        <DetailToolbar
          backButtonLink="/vendors"
          onDelete={() => {
            console.log("deleted");
          }}
        />

        <CustomDetail label="Name" detail="John Doe" />
        <CustomDetail label="Contact Number" detail="+92337765533" />
        <CustomDetail label="Category" detail="Electronics" />
        <Flex width={"100%"}>
          <Text width="25%" fontWeight="semibold">
            Sub-Category
          </Text>
          <Flex gap={1.5}>
            {subCategories.map((subcategory) => (
              <Text
                _hover={{ bg: "gray.200" }}
                border={"1px solid gray"}
                borderColor="gray.300"
                fontSize="xs"
                rounded={"md"}
                px={2}
                py={1}
                alignContent="center"
              >
                {subcategory}
              </Text>
            ))}
          </Flex>
        </Flex>
        <>
          <Text fontWeight={"medium"} fontSize="l">
            Recent Orders
          </Text>
          <CustomizeableTable heads={heads} data={data} />
        </>
      </VStack>
    </Box>
  );
};

export default VendorDetail;
