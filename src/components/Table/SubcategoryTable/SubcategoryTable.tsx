import { useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface SubCategory {
  id: number;
  name: string;
  vendorNames: string[];
  quantity: number;
  assigned: number;
  unassigned: number;
  faulty: number;
}

interface SubCategoryTableProps {
  subCategories: any;
}

export const SubcategoryTable = ({ subCategories }: SubCategoryTableProps) => (
  <TableContainer rounded="md">
    <Table variant="striped">
      <Thead bg={"blue.500"}>
        <Tr>
          <Th>Sub-Category Name</Th>
          <Th>Vendor Name</Th>
          <Th>Quantity</Th>
          <Th>Quantity Assigned</Th>
          <Th>Quantity Unassgined</Th>
          <Th>Quantity faulty</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {subCategories.map((subCategory: SubCategory) => (
          <Tr key={subCategory.id}>
            <Td>{subCategory.name}</Td>
            <Td>{subCategory.vendorNames}</Td>
            <Td>{subCategory.quantity}</Td>
            <Td>{subCategory.assigned}</Td>
            <Td>{subCategory.unassigned}</Td>
            <Td>{subCategory.faulty}</Td>
            <Td color="blue.400">
              {<Link to={`/subcategories/${subCategory.id}`}>View</Link>}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
