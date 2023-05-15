import React from "react";
import { Link } from "react-router-dom";
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
import { useAuth } from "../../hooks/Auth/useAuth";
import { UserRole } from "../../constant/UserRoles";
import { useComplaints } from "../../hooks/Complaints/useComplaints";
import {
  complaintEmployeeHeads,
  complaintSuperAdminHeads,
  complaintAdminHeads,
} from "../../constant/tableHeads";
import { useState } from "react";

const Complaints = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const { user } = useAuth();
  const { complaints } = useComplaints();
  const isAdmin = user?.role.name === UserRole.ADMIN;
  const isSuperAdmin = user?.role.name === UserRole.SUPER_ADMIN;
  const data = complaints && isAdmin ? null : complaints;
  const adminData =
    complaints && isAdmin
      ? {
          receivedComplaints: complaints?.receivedComplaints,
          submittedComplaints: complaints?.submittedComplaints,
        }
      : null;

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <Flex align="center" mb={4} justifyContent="space-between">
        <Heading size="md" mr={4}>
          Complaints
        </Heading>
        {tabIndex === 1 && (
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
      {adminData && (
        <Tabs orientation="vertical" variant="none" onChange={handleTabChange}>
          <TabList my={19} gap={2}>
            <Tab
              textAlign="start"
              rounded="lg"
              _selected={{ bg: "blue.500", color: "white" }}
              fontSize="sm"
              pr={85}
            >
              Employees
            </Tab>
            <Tab
              textAlign="start"
              rounded="lg"
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
                heads={complaintAdminHeads}
                data={adminData?.receivedComplaints ?? []}
                selectFilter={["status"]}
                filterable
                viewLink="complaints"
              />
            </TabPanel>
            <TabPanel>
              <CustomizeableTable
                heads={complaintEmployeeHeads}
                data={adminData?.submittedComplaints ?? []}
                selectFilter={["status"]}
                filterable
                viewLink="complaints"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
      {data && (
        <CustomizeableTable
          heads={
            isSuperAdmin ? complaintSuperAdminHeads : complaintEmployeeHeads
          }
          data={data}
          selectFilter={
            user.role.name !== UserRole.EMPLOYEE
              ? ["status", "organization"]
              : []
          }
          filterable
          viewLink="complaints"
        />
      )}
    </Box>
  );
};

export default Complaints;
