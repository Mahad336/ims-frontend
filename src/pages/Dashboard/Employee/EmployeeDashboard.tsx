import React from "react";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";

import { Box, Text } from "@chakra-ui/react";
import EmployeeProfile from "../../../components/EmployeeProfile/EmployeeProfile";
import Navbar from "../../../components/Navbar/Navbar";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const EmployeeDashboard: React.FC = () => {
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

  const imageUrl =
    "https://res.cloudinary.com/dmrrqh7at/image/upload/v1680324362/ims/complaints/g7vd17dxoy3skvyktfuj.png";

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5}>
        <EmployeeProfile
          id={1}
          name="Mahad"
          emailAddress="m@gmail.com"
          Desgination="Software Enginner"
          Department="Development"
          ContactNumber="+923377655023"
          Education="BSCS"
          CompanyExperience="2 Years"
          TotalExperience="6 Years"
          imageUrl={imageUrl}
        />
        <Box py={6} marginTop={5}>
          <Text color="black" fontWeight="semibold">
            Recent Requests
          </Text>
          <CustomizeableTable heads={heads} data={data} />
        </Box>
        <Box py={6}>
          <Text color="black" fontWeight="semibold">
            Recent Complaints
          </Text>
          <CustomizeableTable heads={heads} data={data} />
        </Box>
      </Box>
    </>
  );
};

export default EmployeeDashboard;
