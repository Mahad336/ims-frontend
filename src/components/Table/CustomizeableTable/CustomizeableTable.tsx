import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Link,
  Icon,
  TableCaption,
  TableContainer,
  Spacer,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { TbSortAscendingLetters, TbSortAscendingNumbers } from "react-icons/tb";

type TableProps = {
  heads: string[];
  data: any[];
  filterable?: boolean;
  selectFilter?: string[];
};

type FilterProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const SelectFilter: React.FC<FilterProps> = ({ options, value, onChange }) => (
  <Select value={value} onChange={(e) => onChange(e.target.value)}>
    <option value="">All</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </Select>
);

const CustomizeableTable: React.FC<TableProps> = ({
  heads,
  data,
  filterable = false,
  selectFilter = [],
}) => {
  const [filter, setFilter] = useState("");
  const [selectFilters, setSelectFilters] = useState<{ [key: string]: string }>(
    {}
  );

  const filteredData = filterable
    ? data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(filter.toLowerCase())
        )
      )
    : data;

  const filteredDataWithSelectFilters = selectFilter.reduce((acc, curr) => {
    if (selectFilters[curr]) {
      return acc.filter(
        (item) =>
          item[curr]?.toString().toLowerCase() ===
          selectFilters[curr].toString().toLowerCase()
      );
    }
    return acc;
  }, filteredData);

  const selectFilterOptions = selectFilter.reduce((acc, curr) => {
    const options = [...new Set(data.map((item) => item[curr]))];
    options.sort();
    return { ...acc, [curr]: options };
  }, {});

  return (
    <>
      <Flex align="center" gap={5} pb={5}>
        {filterable && (
          <InputGroup w={300}>
            <InputLeftElement children={<Icon as={FaSearch} />} />
            <Input
              type="text"
              placeholder="Search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </InputGroup>
        )}
        <Spacer />

        {selectFilter.map((filter) => (
          <Flex alignItems="center" key={filter} my={2} w={300}>
            <Text mr={2}>{filter}:</Text>
            <SelectFilter
              options={selectFilterOptions[filter]}
              value={selectFilters[filter] || ""}
              onChange={(value) =>
                setSelectFilters((prev) => ({
                  ...prev,
                  [filter]: value,
                }))
              }
            />
          </Flex>
        ))}
      </Flex>
      {/* <Flex align="baseline" justify="flex-end" gap={3} p="10px 0">
        <Icon
          as={TbSortAscendingLetters}
          boxSize={6}
          backgroundColor="gray.500"
          color="white"
        />
        <Icon
          as={TbSortAscendingNumbers}
          boxSize={6}
          backgroundColor="gray.500"
          color="white"
        />
      </Flex> */}

      <TableContainer rounded="md" border={"1px"} borderColor="gray.300">
        <Table>
          <Thead bg="blue.500">
            <Tr>
              {heads.map((head) => (
                <Th key={head} color="white">
                  {head}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {filteredDataWithSelectFilters.map((item, index) => (
              <Tr key={index}>
                {Object.keys(item).map((key) => (
                  <Td key={key} fontSize="small" isTruncated maxW={"300px"}>
                    {item.hasOwnProperty(key) ? item[key] : ""}
                  </Td>
                ))}
                {heads.includes("Action") && (
                  <Td key="Action" fontSize="small">
                    <Link as={RouterLink} color="blue.400" to={`${item.id}`}>
                      View
                    </Link>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {filteredDataWithSelectFilters.length === 0 && (
        <Text mt={6} textAlign="center">
          No data found.
        </Text>
      )}
    </>
  );
};

export default CustomizeableTable;
