import React, { useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
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
import { useUser } from "../../../hooks/Users/useFetchUser";
import { itemHeads, requestHeads } from "../../../constant/tableHeads";
import { mapItemData, mapRequestData } from "../../../utils/mapEntityData";
import { useDeleteUser } from "../../../hooks/Users/useDeleteUser";

const EmployeeDetail: React.FC = () => {
  const { id } = useParams();
  const { user } = useUser(id);
  const { item, image, email, contact, department, name, requests } =
    user ?? {};
  const { deleteUser } = useDeleteUser();

  const [selectedTab, setSelectedTab] = useState(0);

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
            onDelete={() => deleteUser(id)}
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

              {requests && (
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
                      <ImageAndDetail src={image} name={name} />
                      <CustomDetail label="Email Address" detail={email} />
                      <CustomDetail label="Contact Number" detail={contact} />
                      <CustomDetail label="Department" detail={department} />
                    </VStack>
                  </TabPanel>
                  <TabPanel px={0} py={0}>
                    <CustomizeableTable
                      heads={itemHeads}
                      data={mapItemData(item)}
                    />
                  </TabPanel>
                  <TabPanel px={0} py={0}>
                    <CustomizeableTable
                      heads={requestHeads}
                      data={mapRequestData(requests)}
                    />
                  </TabPanel>
                </TabPanels>
              )}
            </Tabs>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default EmployeeDetail;
