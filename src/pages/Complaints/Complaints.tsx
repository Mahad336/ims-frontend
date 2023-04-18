import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Button,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const Complaints: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const role = "admin";
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

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
        <Flex>
          <Heading size="md">Complaints</Heading>
          <Spacer></Spacer>
          {role === "admin" && (
            <Link to="create">
              <Button
                leftIcon={<Icon as={AiOutlinePlus} boxSize="22px" />}
                colorScheme="green"
                variant="solid"
              >
                Create Complaint
              </Button>
            </Link>
          )}
        </Flex>
        <Flex>
          <Tabs
            onChange={handleTabChange}
            orientation="vertical"
            variant="none"
            width="100%"
          >
            <TabList my={9} gap={2}>
              <Tab
                textAlign={"start"}
                rounded={"lg"}
                _selected={{ bg: "blue.500", color: "white" }}
                fontSize="sm"
                pr={85}
              >
                Employees
              </Tab>
              <Tab
                textAlign={"start"}
                rounded={"lg"}
                _selected={{ bg: "blue.500", color: "white" }}
                fontSize="sm"
                pr={85}
              >
                Submitted
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <CustomizeableTable
                  heads={heads}
                  data={data}
                  selectFilter={["category"]}
                  filterable
                />
              </TabPanel>
              <TabPanel>
                <CustomizeableTable
                  heads={heads}
                  data={data}
                  filterable
                  selectFilter={["category"]}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </>
  );
};

export default Complaints;
