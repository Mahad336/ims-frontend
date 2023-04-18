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
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";
import OrganizationGeneralDetail from "../../../components/OrganizationGeneralDetail/OrganizationGeneralDetail";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const OrganizationDetail: React.FC = () => {
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
            backButtonLink="/organizations"
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
            >
              <TabList gap={2} minWidth="19%">
                <Tab
                  rounded={"lg"}
                  bg={selectedTab === 0 ? "blue.500" : ""}
                  color={selectedTab === 0 ? "white" : "black"}
                  fontSize="sm"
                >
                  General Information
                </Tab>
                <Tab
                  rounded={"lg"}
                  bg={selectedTab === 0 ? "" : "blue.500"}
                  color={selectedTab === 0 ? "black" : "white"}
                  fontSize="sm"
                >
                  Admins
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel
                  px={5}
                  py={0}
                  borderLeft="1px"
                  borderColor={"gray.300"}
                >
                  <OrganizationGeneralDetail
                    title={false}
                    imageSrc="https://picsum.photos/200/300?random=3"
                    name="TechSwipe Pvt.Ltd"
                    email="ugreen@Hotmail.com"
                    repName="John Doe"
                    repContact="+923377654823"
                    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              convallis, elit vel tempus aliquam, dui felis sollicitudin sem, eu
              hendrerit nisi ex eget eros. Proin eget ipsum quis nisi placerat
              imperdiet id pulvinar nulla. Ut odio arcu, dictum in vulputate ut,
              vehicula eu augue. Aenean tempor ultrices urna eget pretium"
                    address="2177 Hide A Way Road, Lahore, Pakistan"
                  />
                </TabPanel>
                <TabPanel px={5} py={0}>
                  <Box
                    border="1px"
                    borderColor={"gray.300"}
                    borderTop="none"
                    rounded={"lg"}
                  >
                    <CustomizeableTable heads={heads} data={data} />
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default OrganizationDetail;
