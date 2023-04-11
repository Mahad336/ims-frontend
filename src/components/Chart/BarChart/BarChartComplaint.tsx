import { useState } from "react";
import { Chart } from "react-google-charts";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CSVLink } from "react-csv";

interface Props {
  data: [string, number, number][];
}

const BarChartComplaint: React.FC<Props> = ({ data }) => {
  const [csvData, setCsvData] = useState([]);

  const title = "Complaints";
  const filename = `${title} Data.csv`;

  const handleDownloadCSV = () => {
    setCsvData(data);
  };

  const chartData = [["Complaints", "Pending", "Resolved"], ...data];
  const chartOptions = {
    // chart: {
    //   title: `Complaints`,
    //   subtitle: "Pending vs. Resolved",
    // },
    legend: { position: "top" },
    orientation: "vertical",
    title: title,
    hAxis: {
      title: "Month",
    },
    vAxis: {
      title: "Number of Complaints",
    },
  };

  return (
    <Box py={4} width="50%">
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Box color="grey" display={"flex"}>
          <Text color="black">Complaints -</Text>
          <CSVLink
            data={csvData}
            filename={filename}
            onClick={handleDownloadCSV}
          >
            Download CSV
          </CSVLink>
        </Box>
      </Flex>
      <Chart
        chartType="Bar"
        loader={<div>Loading Chart...</div>}
        data={chartData}
        height="400px"
        options={chartOptions}
      />
    </Box>
  );
};

export default BarChartComplaint;
