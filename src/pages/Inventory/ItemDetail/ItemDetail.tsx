import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";
import { useUser } from "../../../hooks/Users/useFetchUser";
import { useParams } from "react-router-dom";
import { useItem } from "../../../hooks/Inventory/useItem";
import { formatDate } from "../../../utils/formattedDate";
import { useDeleteItem } from "../../../hooks/Inventory/useDeleteItem";

const ItemDetail: FC = () => {
  const { id } = useParams();
  const { item } = useItem(id);
  const {
    name,
    serialNumber,
    description,
    category,
    subcategory,
    createdDate,
    unitPrice,
    currentPrice,
    deprecatedPrice,
    percentageDepreciation,
    assignedTo: user,
    vendor,
  } = item ?? {};
  const { deleteItem } = useDeleteItem();

  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
        spacing={8}
      >
        <DetailToolbar
          backButtonLink="/inventory"
          onDelete={() => deleteItem(id)}
        />
        <Flex>
          <CustomDetail label="Item Name" detail={name} firstChildWidth="50%" />
          <CustomDetail
            label="Serial Number"
            detail={serialNumber}
            firstChildWidth="50%"
          />
        </Flex>
        <CustomDetail label="Description" detail={description} />
        <CustomDetail label="Category" detail={category?.name} />
        <CustomDetail label="Sub-Category" detail={subcategory?.name} />
        <CustomDetail
          label="Date of Purchase"
          detail={formatDate(createdDate)}
        />
        <CustomDetail label="Unit Price" detail={unitPrice} />
        <CustomDetail label="Current Price" detail={currentPrice} />
        <Flex>
          <CustomDetail
            label="Deprecated Price"
            detail={deprecatedPrice}
            firstChildWidth="50%"
          />
          <CustomDetail
            label={percentageDepreciation}
            detail="30%"
            firstChildWidth="50%"
          />
        </Flex>

        <>
          <Text fontWeight={"semibold"} fontSize="xl" pb={10}>
            Vendor
          </Text>
          <CustomDetail label="Name" detail={vendor?.name} />
        </>

        <CustomDetail label="Contact Number" detail="+923377654933" />
        {user && (
          <ImageAndDetail
            heading={"Assgined to"}
            src={user?.image}
            name={user?.name}
            department={user?.department}
            contact={user?.contact}
            email={user?.email}
          />
        )}
      </VStack>
    </Box>
  );
};

export default ItemDetail;
