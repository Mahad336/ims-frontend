import React from "react";
import { Box, Heading, Flex, Spacer, Button, Icon } from "@chakra-ui/react";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { useRequests } from "../../hooks/Requests/useRequests";
import { requestHeads } from "../../constant/tableHeads";

const Returns: React.FC = () => {
  const { requests: returns, isSuccess: requestsFetched } =
    useRequests("return");

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Requests</Heading>
          <Spacer></Spacer>
        </Flex>
        {requestsFetched && (
          <CustomizeableTable
            heads={requestHeads}
            data={returns}
            filterable
            selectFilter={["category", "status"]}
          />
        )}
      </Box>
    </>
  );
};

export default Returns;
