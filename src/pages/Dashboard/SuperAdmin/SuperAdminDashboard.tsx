import React from "react";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import ChartComponent from "../../../components/Chart/ColumnChart/ColumnChart";
import { Box, Text, Heading } from "@chakra-ui/react";
import { TiArrowSortedUp } from "react-icons/ti";
import DashboardStats from "../../../components/DashboardStats/DashboardStats";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const SuperAdminDashboard: React.FC = () => {
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
      category: "Category 3",
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
  const organizationsData: [string, number][] = [
    ["Jan", 100],
    ["Feb", 200],
    ["Mar", 300],
    ["Apr", 400],
    ["May", 500],
    ["Jun", 600],
    ["Jul", 700],
    ["Aug", 800],
    ["Sep", 900],
    ["Oct", 100],
    ["Nov", 1100],
    ["Dec", 1200],
  ];

  const adminsData: [string, number][] = [
    ["Jan", 50],
    ["Feb", 100],
    ["Mar", 150],
    ["Apr", 200],
    ["May", 250],
    ["Jun", 300],
    ["Jul", 350],
    ["Aug", 400],
    ["Sep", 450],
    ["Oct", 500],
    ["Nov", 550],
    ["Dec", 600],
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
  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5}>
        <Heading size="md">Dashboard</Heading>
        <DashboardStats data={DashboardSt} />

        <Box borderBottom="1px solid" borderBottomColor="gray.300">
          <ChartComponent
            adminsData={adminsData}
            organizationsData={organizationsData}
          ></ChartComponent>
        </Box>

        <Box py={12}>
          <Text color="black">Recent Complaints</Text>
          <CustomizeableTable heads={heads} data={data} />
        </Box>
      </Box>
    </>
  );
};

export default SuperAdminDashboard;
