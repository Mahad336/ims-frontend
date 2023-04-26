import React from "react";
import CustomizeableTable from "../../../components/Table/CustomizeableTable/CustomizeableTable";
import ChartComponent from "../../../components/Chart/ColumnChart/ColumnChart";
import { Box, Text, Heading } from "@chakra-ui/react";
import { TiArrowSortedUp } from "react-icons/ti";
import DashboardStats from "../../../components/DashboardStats/DashboardStats";
import Navbar from "../../../components/Navbar/Navbar";
import { useFetchUsers } from "../../../hooks/Users/useFetchUsers";
import { useComplaints } from "../../../hooks/Complaints/useComplaints";
import { useOrganization } from "../../../hooks/Organizations/useOrganization";
import { filterByCreatedDate } from "../../../utils/filterByCreatedDate";
import { getDataByMonth } from "../../../utils/getDataByMonth";
import { formatDate } from "../../../utils/formattedDate";
import { descSortDataByCreatedDate } from "../../../utils/descSortByCreatedDate";

const SuperAdminDashboard: React.FC = () => {
  const { users: admins, isSuccess: userFetched } = useFetchUsers();
  const { complaints, isSuccess: complaintsFetched } = useComplaints();
  const { organizations, isSuccess: organizationsFetched } = useOrganization();
  const dashboardStatsFetched =
    userFetched && complaintsFetched && organizationsFetched;

  const data =
    complaints &&
    complaints.map((complaint) => ({
      id: complaint.id,
      adminName: complaint?.submittedBy?.name,
      organization: complaint?.organization?.name,
      description: complaint?.description,
      submissionDate: formatDate(complaint?.createdDate),
      status: complaint?.status,
    }));

  const heads: string[] = [
    "Id",
    "Admin Name",
    "Organization",
    "Description",
    "Submission Date",
    "Status",
    "Action",
  ];
  const organizationsData = organizations ? getDataByMonth(organizations) : [];
  const adminsData = admins ? getDataByMonth(admins) : [];

  const pendingComplaints = complaints?.filter(
    (complaint) => complaint?.status === "pending"
  ).length;
  const DashboardSt = [
    {
      name: "Organizations",
      totalCount: String(organizations?.length),
      monthlyCount: `${filterByCreatedDate(
        organizations,
        2
      )} new organizations in 2 months `,
    },
    {
      name: "Admins",
      totalCount: String(admins?.length),
      monthlyCount: `${filterByCreatedDate(admins, 2)} new Admins in 2 months `,
    },
    {
      name: "Pending Complaints",
      totalCount: String(pendingComplaints),
      monthlyCount: `${filterByCreatedDate(
        complaints?.filter((complaint) => complaint?.status === "pending"),
        2
      )} new complaints in 2 months `,
    },
    {
      name: "Resolved Compaints",
      totalCount: String(complaints?.length - pendingComplaints),
      monthlyCount: `${filterByCreatedDate(
        complaints?.filter((complaint) => complaint?.status === "resolved"),
        2
      )} new complaints in 2 months `,
    },
  ];

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5}>
        <Heading size="md">Dashboard</Heading>
        {dashboardStatsFetched && <DashboardStats data={DashboardSt} />}

        <Box borderBottom="1px solid" borderBottomColor="gray.300">
          <ChartComponent
            adminsData={adminsData}
            organizationsData={organizationsData}
          ></ChartComponent>
        </Box>
        {dashboardStatsFetched && (
          <Box py={12}>
            <Text color="black">Recent Complaints</Text>
            <CustomizeableTable heads={heads} data={data} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default SuperAdminDashboard;
