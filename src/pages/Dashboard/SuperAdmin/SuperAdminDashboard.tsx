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
  const { complaints, isSuccess: complaintsFetched } = useComplaints();
  const { dashboardStats, isSuccess: dashboardStatsFetched } =
    useDashboardStats();
  const { dashboardGraphData, isSuccess: dashboardGraphDataFetched } =
    useDashboardGraphData();
  dashboardStatsFetched && console.log(dashboardStats);

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5}>
        <Heading size="md">Dashboard</Heading>
        {dashboardStatsFetched && <DashboardStats data={dashboardStats} />}
        {dashboardGraphDataFetched && (
          <Box borderBottom="1px solid" borderBottomColor="gray.300">
            <ChartComponent
              adminsData={dashboardGraphData.organizationGraphData}
              organizationsData={dashboardGraphData.adminsGraphData}
            ></ChartComponent>
          </Box>
        )}
        {dashboardStatsFetched && (
          <Box py={12}>
            <Text color="black">Recent Complaints</Text>
            <CustomizeableTable
              heads={complaintSuperAdminHeads}
              data={complaints}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default SuperAdminDashboard;
