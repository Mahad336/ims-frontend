import React, { useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
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
import { useOrganization } from "../../../hooks/Organizations/useOrganization";
import { adminHeads } from "../../../constant/tableHeads";
import { mapAdminData } from "../../../utils/mapEntityData";
import { useDeleteOrganization } from "../../../hooks/Organizations/useDeleteOrganizaion";

const OrganizationDetail: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { id } = useParams();
  const { organization } = useOrganization(id);
  const {
    image,
    name,
    email,
    bio,
    representativeName,
    representativeContact,
    address,
  } = organization ?? {};
  const { deleteOrganization } = useDeleteOrganization();

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
            onDelete={() => deleteOrganization(id)}
          />
          <Flex>
            {organization && (
              <Tabs
                onChange={handleTabChange}
                orientation="vertical"
                variant="none"
                gap={5}
                width="100%"
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
                      imageSrc={image}
                      name={name}
                      email={email}
                      repName={representativeName}
                      repContact={representativeContact}
                      bio={bio}
                      address={address}
                    />
                  </TabPanel>
                  <TabPanel px={5} py={0}>
                    <Box
                      border="1px"
                      borderColor={"gray.300"}
                      borderTop="none"
                      rounded={"lg"}
                    >
                      <CustomizeableTable
                        heads={adminHeads}
                        data={mapAdminData(
                          organization?.user?.filter(
                            (user) => user?.roleId === 2
                          )
                        )}
                      />
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            )}
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default OrganizationDetail;
