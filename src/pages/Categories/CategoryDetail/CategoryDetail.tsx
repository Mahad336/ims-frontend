import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";

const CategoryDetail: FC = () => {
  const vendors = [
    { name: "Mahad's Furniture", contactNumber: "+93293294930" },
    { name: "John's Furniture", contactNumber: "+93293294931" },
  ];

  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
        spacing={8}
      >
        <DetailToolbar
          backButtonLink="/categories"
          onDelete={() => {
            console.log("deleted");
          }}
        />
        <CustomDetail label="Category Name" detail="Electronics" />
        <CustomDetail label="Sub-Category Name" detail="Laptop" />
        <Flex>
          <CustomDetail
            label="Total Quantity"
            detail="50"
            firstChildWidth="50%"
          />
          <CustomDetail
            label="Quantity Assigned"
            detail="45"
            firstChildWidth="50%"
          />
        </Flex>
        <CustomDetail label="Quantity Unassigned" detail="4" />
        <CustomDetail label="Quantity Faulty" detail="1" />

        <>
          <Text fontWeight={"semibold"} fontSize="xl" pb={10}>
            Vendor
          </Text>
          <VStack
            divider={<StackDivider borderColor="gray.300" />}
            align="stretch"
            spacing={8}
          >
            {vendors.map((item, index) => (
              <Flex key={index}>
                <CustomDetail
                  label="Name"
                  detail={item.name}
                  firstChildWidth="50%"
                />
                <CustomDetail
                  label="Contact Number"
                  detail={item.contactNumber}
                  firstChildWidth="50%"
                />
              </Flex>
            ))}
          </VStack>
        </>
      </VStack>
    </Box>
  );
};

export default CategoryDetail;
