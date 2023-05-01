import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { Box, Select, Text, Flex } from "@chakra-ui/react";
import { CSVLink } from "react-csv";

const BarChartInventory = ({ data }) => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [csvData, setCsvData] = useState([]);

  const filename = `Invenotry Data.csv`;

  const handleDownloadCSV = () => {
    setCsvData(data[selectedMonth]);
  };

  const options = {
    legend: { position: "top" },
    // chart: {
    //   title: `Inventory Items`,
    //   subtitle: "Assigned vs. Unassigned items",
    // },
  };

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
  };

  return (
    <Box width="50%" py={4} position="relative">
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Box color="grey" display={"flex"}>
          <Text color="black">Inventory Items -</Text>
          <CSVLink
            data={csvData}
            filename={filename}
            onClick={handleDownloadCSV}
          >
            Download CSV
          </CSVLink>
        </Box>
      </Flex>
      <Box mb={4}>
        <Select
          border="none"
          color={"blue.500"}
          value={selectedMonth}
          onChange={handleMonthChange}
          width="fit-content"
          position={"absolute"}
          right={0}
          top={3}
          zIndex={1}
        >
          {Object.keys(data).map((month: string) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>
      </Box>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data[selectedMonth]}
        options={options}
        loader={<div>Loading Chart</div>}
      />
    </Box>
  );
};

export default BarChartInventory;
