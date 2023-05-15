import React from "react";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import ChartComponent from "../../../components/Chart/ColumnChart/ColumnChart";
import { Box, Text, Heading } from "@chakra-ui/react";
import { TiArrowSortedUp } from "react-icons/ti";
import DashboardStats from "../../../components/DashboardStats/DashboardStats";
import BarChartComplaint from "../../../components/Chart/BarChart/BarChartComplaint";
import BarChartInventory from "../../../components/Chart/BarChart/BarChartInventory";

import { complaintAdminHeads } from "../../../constant/tableHeads";
import { useComplaints } from "../../../hooks/Complaints/useComplaints";
import {
  useDashboardGraphData,
  useDashboardStats,
} from "../../../hooks/Dashboard/useDashboard";
interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const AdminDashboard: React.FC = () => {
  const { complaints } = useComplaints();
  const { dashboardStats } = useDashboardStats();
  const { dashboardGraphData } = useDashboardGraphData();
  const dashboardDataFetched =
    complaints && dashboardStats && dashboardGraphData;

  return (
    <>
      {dashboardDataFetched && (
        <Box bg="whiteAlpha.900" rounded={10} p={5}>
          <Heading size="md">AdminDashboard</Heading>
          <DashboardStats data={dashboardStats} />

          <Box
            borderBottom="1px solid"
            borderBottomColor="gray.300"
            display={"flex"}
            p={3}
            gap={3}
          >
            <BarChartInventory
              data={dashboardGraphData.inventoryMonthData}
            ></BarChartInventory>
            <BarChartComplaint
              data={dashboardGraphData.complaintsMonthData}
            ></BarChartComplaint>
          </Box>

          <Box py={12}>
            <Text color="black">Recent Complaints</Text>

            <CustomizeableTable
              heads={complaintAdminHeads}
              data={complaints.receivedComplaints}
              viewLink="complaints"
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default AdminDashboard;
