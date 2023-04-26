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
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../hooks/Auth/useAuth";
import { UserRole } from "../../constant/UserRoles";
import { useComplaints } from "../../hooks/Complaints/useComplaints";
import { mapComplaintData } from "../../utils/mapComplaintData";

const Complaints = () => {
  const { user } = useAuth();
  const { complaints, isSuccess } = useComplaints();
  const isAdmin = user?.role.name === UserRole.ADMIN;
  const data = isAdmin ? null : mapComplaintData(complaints || []);
  const adminData = isAdmin
    ? {
        receivedComplaints: mapComplaintData(complaints.receivedComplaints),
        submittedComplaints: mapComplaintData(complaints.submittedComplaints),
      }
    : {};
  const heads = [
    "ID",
    "Title",
    "Description",
    "Submission Date",
    "Status",
    "Action",
  ];

  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <Flex align="center" mb={4}>
        <Heading size="md" mr={4}>
          Complaints
        </Heading>
        {isAdmin && isSuccess && (
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
      {isAdmin && isSuccess && (
        <Tabs orientation="vertical" variant="none" width="100%">
          <TabList my={9} gap={2}>
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
                heads={heads}
                data={adminData.receivedComplaints}
                selectFilter={["status"]}
                filterable
              />
            </TabPanel>
            <TabPanel>
              <CustomizeableTable
                heads={heads}
                data={adminData.submittedComplaints}
                selectFilter={["status"]}
                filterable
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
      {!isAdmin && isSuccess && data && (
        <CustomizeableTable
          heads={heads}
          data={data}
          selectFilter={["status"]}
          filterable
        />
      )}
    </Box>
  );
};

export default Complaints;
