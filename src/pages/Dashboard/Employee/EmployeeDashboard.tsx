import React from "react";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import { useFetchUsers } from "../../../hooks/Users/useFetchUsers";
import { useComplaints } from "../../../hooks/Complaints/useComplaints";
import { Box, Text } from "@chakra-ui/react";
import EmployeeProfile from "../../../components/EmployeeProfile/EmployeeProfile";
import { useRequests } from "../../../hooks/Requests/useRequests";
import { mapComplaintData, mapRequestData } from "../../../utils/mapEntityData";
import { complaintHeads, requestHeads } from "../../../constant/tableHeads";

const EmployeeDashboard: React.FC = () => {
  const { users: employee, isSuccess: userFetched } = useFetchUsers();
  const { complaints, isSuccess: complaintsFetched } = useComplaints();
  const { requests, isSuccess: requestsFetched } = useRequests();

  const dashboardStatsFetched =
    userFetched && complaintsFetched && requestsFetched;

  return (
    <>
      {dashboardStatsFetched && (
        <Box bg="whiteAlpha.900" rounded={10} p={5}>
          <EmployeeProfile employee={employee} />
          <Box py={6} marginTop={5}>
            <Text color="black" fontWeight="semibold">
              Recent Requests
            </Text>
            <CustomizeableTable
              heads={requestHeads}
              data={mapRequestData(requests ?? [])}
            />
          </Box>
          <Box py={6}>
            <Text color="black" fontWeight="semibold">
              Recent Complaints
            </Text>
            <CustomizeableTable
              heads={complaintHeads}
              data={mapComplaintData(complaints ?? [])}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default EmployeeDashboard;
