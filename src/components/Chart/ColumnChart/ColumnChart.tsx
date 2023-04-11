import {
  Box,
  Tab,
  TabList,
  Tabs,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Chart } from "react-google-charts";
const { CSVLink } = require("react-csv");

type VerticalBarChartProps = {
  organizationsData: [string, number][];
  adminsData: [string, number][];
};

const ChartComponent: React.FC<VerticalBarChartProps> = ({
  organizationsData,
  adminsData,
}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [csvData, setCsvData] = useState([]);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  const data = tabIndex === 0 ? organizationsData : adminsData;
  const title = tabIndex === 0 ? "Organizations" : "Admins";
  const filename = `${title} Data.csv`;

  return (
    <Box py={4} width="100">
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Box color="grey" display={"flex"}>
          <Text color="black">Analytics -</Text>
          <CSVLink
            data={data}
            filename={filename}
            onClick={() => setCsvData(data)}
          >
            Download CSV
          </CSVLink>
        </Box>
        <Tabs onChange={handleTabChange} variant="enclosed">
          <TabList>
            <Tab>Organizations</Tab>
            <Tab>Admins</Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Chart
        chartType="Bar"
        loader={<div>Loading Chart...</div>}
        data={[["Month", title], ...data]}
        height="400px"
        options={{
          animation: {
            startup: true,
            easing: "linear",
            duration: "500",
          },
          title: title,
          legend: { position: "none" },
          vAxis: {
            title: `Number of ${title}`,
            minValue: 0,
            maxValue: 1500,
          },
        }}
      />
    </Box>
  );
};

export default ChartComponent;
