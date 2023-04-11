import React from "react";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import ChartComponent from "../../../components/Chart/ColumnChart/ColumnChart";
import { Box, Text, Heading } from "@chakra-ui/react";
import { TiArrowSortedUp } from "react-icons/ti";
import DashboardStats from "../../../components/DashboardStats/DashboardStats";
import BarChartComplaint from "../../../components/Chart/BarChart/BarChartComplaint";
import BarChartInventory from "../../../components/Chart/BarChart/BarChartInventory";
interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const AdminDashboard: React.FC = () => {
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
      category: "Category 333",
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
  const complaintsData: [string, number, number][] = [
    ["Jan", 20, 10],
    ["Feb", 30, 20],
    ["Mar", 40, 30],
    ["Apr", 50, 40],
    ["May", 60, 50],
    ["Jun", 70, 60],
    ["Jul", 80, 70],
    ["Aug", 90, 80],
    ["Sep", 100, 90],
    ["Oct", 110, 100],
    ["Nov", 120, 110],
    ["Dec", 130, 20],
  ];

  const DashboardSt = [
    {
      name: "Organization",
      totalCount: "1500",
      monthlyCount: "200 new organizations this week",
    },
    {
      name: "Organization 2",
      totalCount: "1500",
      monthlyCount: "200 new organizations this week",
    },
    {
      name: "Organization 3",
      totalCount: "1500",
      monthlyCount: "200 new organizations this week",
    },
    {
      name: "Organization 4",
      totalCount: "1500",
      monthlyCount: "200 new organizations this week",
    },
  ];

  const InventoryData = {
    January: [
      ["Category", "Assigned", "Unassigned", "Quantity"],
      ["Electronics", 10, 5, 15],
      ["Furniture", 8, 2, 10],
      ["Stationary", 15, 3, 18],
    ],
    February: [
      ["Category", "Assigned", "Unassigned", "Quantity"],
      ["Electronics", 8, 3, 11],
      ["Furniture", 6, 4, 10],
      ["Stationary", 12, 6, 18],
    ],
    March: [
      ["Category", "Assigned", "Unassigned", "Quantity"],
      ["Electronics", 12, 8, 20],
      ["Furniture", 10, 6, 16],
      ["Stationary", 18, 12, 30],
    ],
    // define data for other months...
  };

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5}>
        <Heading size="md">AdminDashboard</Heading>
        <DashboardStats data={DashboardSt} />

        <Box
          borderBottom="1px solid"
          borderBottomColor="gray.300"
          display={"flex"}
          p={3}
          gap={3}
        >
          <BarChartInventory data={InventoryData}></BarChartInventory>
          <BarChartComplaint data={complaintsData}></BarChartComplaint>
        </Box>

        <Box py={12}>
          <Text color="black">Recent Complaints</Text>
          <CustomizeableTable heads={heads} data={data} />
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;