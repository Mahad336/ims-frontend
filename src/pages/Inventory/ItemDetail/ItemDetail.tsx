import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";

const ItemDetail: FC = () => {
  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
        spacing={8}
      >
        <DetailToolbar
          backButtonLink="/inventory"
          onDelete={() => {
            console.log("deleted");
          }}
        />
        <Flex>
          <CustomDetail
            label="Item Name"
            detail="Macbook Pro 13 2015"
            firstChildWidth="50%"
          />
          <CustomDetail
            label="Serial Number"
            detail="4398765"
            firstChildWidth="50%"
          />
        </Flex>
        <CustomDetail
          label="Description"
          detail=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              convallis, elit vel tempus aliquam, dui felis sollicitudin sem, eu
              hendrerit nisi ex eget eros. Proin eget ipsum quis nisi placerat
              imperdiet id pulvinar nulla. Ut odio arcu, dictum in vulputate ut,
              vehicula eu augue. Aenean tempor ultrices urna eget pretium."
        />
        <CustomDetail label="Category" detail="Electronics" />
        <CustomDetail label="Sub-Category" detail="Mouse" />
        <CustomDetail label="Date of Purchase" detail="11/12/2021" />
        <CustomDetail label="Unit Price" detail="Rs 150,000" />
        <CustomDetail label="Current Price" detail="Rs 250,000" />
        <Flex>
          <CustomDetail
            label="Deprecated Price"
            detail="50,000"
            firstChildWidth="50%"
          />
          <CustomDetail
            label="Percentage Depreciaion"
            detail="30%"
            firstChildWidth="50%"
          />
        </Flex>

        <>
          <Text fontWeight={"semibold"} fontSize="xl" pb={10}>
            Vendor
          </Text>
          <CustomDetail label="Name" detail="Mouse" />
        </>

        <CustomDetail label="Contact Number" detail="+923377654933" />
        <ImageAndDetail
          heading={"Assgined to"}
          src={"https://bit.ly/dan-abramov"}
          name={"Emery Siphron"}
          department={"Development"}
          contact={"+92373393298"}
          email={"ugreen@Hotmail.com"}
        />
      </VStack>
    </Box>
  );
};

export default ItemDetail;
