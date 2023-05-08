import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import { useVendor } from "../../../hooks/Vendors/useVendor";
import { useParams } from "react-router-dom";
import { itemHeads } from "../../../constant/tableHeads";
import { mapItemData } from "../../../utils/mapEntityData";
import { useDeleteVendor } from "../../../hooks/Vendors/useDeleteVendor";

const VendorDetail: FC = () => {
  const { id } = useParams();
  const { vendor } = useVendor(id);
  const { deleteVendor } = useDeleteVendor();
  const { name, contact, categories, subcategories, items } = vendor ?? {};

  const heads: string[] = ["id", "name", "category", "quantity", "price"];
  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      {vendor && (
        <VStack
          divider={<StackDivider borderColor="gray.300" />}
          align="stretch"
          spacing={8}
        >
          <DetailToolbar
            backButtonLink="/vendors"
            onDelete={() => deleteVendor(id)}
          />

          <CustomDetail label="Name" detail={name} />
          <CustomDetail label="Contact Number" detail={contact} />
          <CustomDetail
            label="Category"
            detail={categories.map((category) => category?.name).join(", ")}
          />
          <Flex width={"100%"}>
            <Text width="25%" fontWeight="semibold">
              Sub-Category
            </Text>
            <Flex gap={1.5}>
              {subcategories.map((subcategory, index) => (
                <Text
                  key={index}
                  _hover={{ bg: "gray.200" }}
                  border={"1px solid gray"}
                  borderColor="gray.300"
                  fontSize="xs"
                  rounded={"md"}
                  px={2}
                  py={1}
                  alignContent="center"
                >
                  {subcategory?.name}
                </Text>
              ))}
            </Flex>
          </Flex>
          <>
            <Text fontWeight={"medium"} fontSize="l">
              Recent Orders
            </Text>
            <CustomizeableTable heads={itemHeads} data={mapItemData(items)} />
          </>
        </VStack>
      )}
    </Box>
  );
};

export default VendorDetail;
