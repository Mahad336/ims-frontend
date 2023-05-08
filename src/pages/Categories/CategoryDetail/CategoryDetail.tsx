import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";
import { useCategory } from "../../../hooks/Categories/useCategory";
import { useParams } from "react-router-dom";
import { useDeleteCategory } from "../../../hooks/Categories/useDeleteCategory";

const CategoryDetail: FC = () => {
  const { id } = useParams();
  const { category } = useCategory(id);
  const {
    vendors,
    itemStats,
    name: subcategoryName,
    parent: parentCategory,
    subcategories,
  } = category ?? {};
  const { deleteCategory } = useDeleteCategory();

  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
        spacing={8}
      >
        <DetailToolbar
          backButtonLink="/categories"
          onDelete={() => deleteCategory(id)}
        />
        <CustomDetail
          label="Category Name"
          detail={parentCategory ? parentCategory?.name : subcategoryName}
        />
        <CustomDetail
          label="Sub-Category Name"
          detail={
            parentCategory
              ? subcategoryName
              : subcategories?.map((sc) => sc.name).join(", ")
          }
        />
        <Flex>
          <CustomDetail
            label="Total Quantity"
            detail={itemStats?.totalQuantity}
            firstChildWidth="50%"
          />
          <CustomDetail
            label="Quantity Assigned"
            detail={itemStats?.assigned}
            firstChildWidth="50%"
          />
        </Flex>
        <CustomDetail
          label="Quantity Unassigned"
          detail={itemStats?.unassigned}
        />
        <CustomDetail label="Quantity Faulty" detail={itemStats?.faulty} />

        <>
          <Text fontWeight={"semibold"} fontSize="xl" pb={10}>
            Vendor
          </Text>
          <VStack
            divider={<StackDivider borderColor="gray.300" />}
            align="stretch"
            spacing={8}
          >
            {vendors?.map((vendor, index) => (
              <Flex key={index}>
                <CustomDetail
                  label="Name"
                  detail={vendor?.name}
                  firstChildWidth="50%"
                />
                <CustomDetail
                  label="Contact Number"
                  detail={vendor?.contact}
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
