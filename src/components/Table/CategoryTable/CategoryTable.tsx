import { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  IconButton,
  Collapse,
  Flex,
  Input,
  TableContainer,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  DeleteIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import CustomizeableTable from "../CustomizeableTable/CustomizeableTable";
import { Link } from "react-router-dom";
import { SubCategoryHeads } from "../../../constant/tableHeads";

interface Category {
  id: number;
  name: string;
  vendorsCount: number;
  subCategoryCount: number;
  subCategories: {}[];
}

interface Subcategory {
  id: number;
  name: string;
  vendorNames: string[];
  quantity: number;
  assigned: number;
  unassigned: number;
  faulty: number;
}

interface RowProps {
  category: Category;
}

const Row = ({ category }: RowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  const handleEdit = () => {
    // handle edit action here
    console.log(`Editing category ${category.id}`);
  };

  const handleDelete = () => {
    // handle delete action here
    console.log(`Deleting category ${category.id}`);
  };

  return (
    <>
      <Tr>
        <Td>{category.id}</Td>
        <Td>{category.name}</Td>
        <Td>{category.subCategoryCount}</Td>
        <Td>{category.vendorsCount}</Td>
        <Td>
          <Flex gap={2}>
            <Link to={`${category.id}/subcategory/add`}>
              <IconButton aria-label="Add" icon={<AddIcon />} size="xs" />
            </Link>
            <Link to={`${category.id}`}>
              <IconButton aria-label="Edit" icon={<EditIcon />} size="xs" />
            </Link>

            <IconButton
              aria-label="Delete"
              icon={<DeleteIcon />}
              size="xs"
              onClick={handleDelete}
            />
          </Flex>
        </Td>
        <Td>
          <Icon as={ChevronDownIcon} onClick={toggleCollapse} />
        </Td>
      </Tr>
      <Tr>
        <Td colSpan={7} p={isOpen ? 1 : 0.3}>
          <Collapse in={isOpen} animateOpacity>
            <CustomizeableTable
              heads={SubCategoryHeads}
              data={category.subCategories}
            />
          </Collapse>
        </Td>
      </Tr>
    </>
  );
};

export const CategoryTable = ({ categories }) => {
  const [filter, setFilter] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredCategories = categories.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <Box p={4}>
      <Box mb={4}>
        <Input
          width="30vw"
          placeholder="Search categories"
          value={filter}
          onChange={handleSearch}
        />
      </Box>
      <TableContainer rounded="md">
        <Table variant="striped">
          <Thead bg={"blue.500"}>
            <Tr>
              <Th color="white">ID</Th>
              <Th color="white">Category Name</Th>
              <Th color="white">Number of Sub-categories</Th>
              <Th color="white">Number of Vendors</Th>
              <Th color="white">Action</Th>
              <Th color="white">Expand</Th>
            </Tr>
          </Thead>
          <Tbody fontSize="small">
            {filteredCategories.map((category) => (
              <Row key={category.id} category={category} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
