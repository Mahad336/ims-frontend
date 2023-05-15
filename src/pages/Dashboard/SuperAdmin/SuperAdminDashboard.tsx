import React from "react";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import ChartComponent from "../../../components/Chart/ColumnChart/ColumnChart";
import { Box, Text, Heading } from "@chakra-ui/react";
import DashboardStats from "../../../components/DashboardStats/DashboardStats";
import { useComplaints } from "../../../hooks/Complaints/useComplaints";

import { complaintSuperAdminHeads } from "../../../constant/tableHeads";
import {
  useDashboardGraphData,
  useDashboardStats,
} from "../../../hooks/Dashboard/useDashboard";

const SuperAdminDashboard: React.FC = () => {
  const { complaints } = useComplaints();
  const { dashboardStats } = useDashboardStats();
  const { dashboardGraphData } = useDashboardGraphData();

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5}>
        <Heading size="md">Dashboard</Heading>
        {dashboardStats && <DashboardStats data={dashboardStats} />}
        {dashboardGraphData && (
          <Box borderBottom="1px solid" borderBottomColor="gray.300">
            <ChartComponent
              adminsData={dashboardGraphData?.adminsGraphData}
              organizationsData={dashboardGraphData?.organizationGraphData}
            ></ChartComponent>
          </Box>
        )}
        {complaints && (
          <Box py={12}>
            <Text color="black">Recent Complaints</Text>
            <CustomizeableTable
              heads={complaintSuperAdminHeads}
              data={complaints}
              viewLink="complaints"
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default SuperAdminDashboard;
