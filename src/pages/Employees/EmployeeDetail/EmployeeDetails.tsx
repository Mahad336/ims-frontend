import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";
import OrganizationGeneralDetail from "../../../components/OrganizationGeneralDetail/OrganizationGeneralDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const EmployeeDetail: React.FC = () => {
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
        <VStack
          divider={<StackDivider borderColor="gray.300" />}
          align="stretch"
          spacing={6}
        >
          <DetailToolbar
            backButtonLink="/employees"
            onDelete={() => {
              console.log("deleted");
            }}
          />
          <Flex>
            <Tabs
              onChange={handleTabChange}
              orientation="vertical"
              variant="none"
              gap={5}
              width="100%"
            >
              <TabList gap={2} alignItems="flex-start" width="25%">
                <Tab
                  rounded={"lg"}
                  _selected={{ bg: "blue.500", color: "white" }}
                  fontSize="sm"
                  width={"100%"}
                  justifyContent="left"
                >
                  General Information
                </Tab>
                <Tab
                  rounded={"lg"}
                  _selected={{ bg: "blue.500", color: "white" }}
                  fontSize="sm"
                  width={"100%"}
                  justifyContent="left"
                >
                  Inventory
                </Tab>
                <Tab
                  rounded={"lg"}
                  _selected={{ bg: "blue.500", color: "white" }}
                  fontSize="sm"
                  width={"100%"}
                  justifyContent="left"
                >
                  Request
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel
                  px={5}
                  py={0}
                  borderLeft="1px"
                  borderColor={"gray.300"}
                >
                  <VStack
                    alignItems={"flex-start"}
                    spacing={8}
                    divider={<StackDivider borderColor="gray.200" />}
                  >
                    <ImageAndDetail
                      src={"https://picsum.photos/200/300?random=3"}
                      name="Paityn Rosser"
                    />
                    <CustomDetail
                      label="Email Address"
                      detail="xharris@gmail.com"
                    />
                    <CustomDetail label="Name" detail="John Doe" />
                    <CustomDetail
                      label="Contact Number"
                      detail="+92342424242"
                    />

                    <CustomDetail label="Department" detail="Development" />
                  </VStack>
                </TabPanel>
                <TabPanel px={0} py={0}>
                  <CustomizeableTable heads={heads} data={data} />
                </TabPanel>
                <TabPanel px={0} py={0}>
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
        </VStack>
      </Box>
    </>
  );
};

export default EmployeeDetail;
