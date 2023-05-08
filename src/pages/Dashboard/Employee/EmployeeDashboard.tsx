import React from "react";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import { useFetchUsers } from "../../../hooks/Users/useFetchUsers";
import { useComplaints } from "../../../hooks/Complaints/useComplaints";
import { Box, Text } from "@chakra-ui/react";
import EmployeeProfile from "../../../components/EmployeeProfile/EmployeeProfile";
import { useRequests } from "../../../hooks/Requests/useRequests";
import {
  complaintEmployeeHeads,
  requestHeads,
} from "../../../constant/tableHeads";

const EmployeeDashboard: React.FC = () => {
  const { users: employee } = useFetchUsers();
  const { complaints } = useComplaints();
  const { requests } = useRequests();

  const dashboardStatsFetched = employee && complaints && requests;

  return (
    <>
      {dashboardStatsFetched && (
        <Box bg="whiteAlpha.900" rounded={10} p={5}>
          <EmployeeProfile employee={employee} />
          <Box py={6} marginTop={5}>
            <Text color="black" fontWeight="semibold">
              Recent Requests
            </Text>
            <CustomizeableTable heads={requestHeads} data={requests} />
          </Box>
          <Box py={6}>
            <Text color="black" fontWeight="semibold">
              Recent Complaints
            </Text>
            <CustomizeableTable
              heads={complaintEmployeeHeads}
              data={complaints}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default EmployeeDashboard;
