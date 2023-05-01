import React from "react";
import { Box, Heading, Flex, Spacer, Button, Icon } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { Link } from "react-router-dom";
import { useRequests } from "../../hooks/Requests/useRequests";
import { requestHeads } from "../../constant/tableHeads";
import { ReqTypes } from "../../constant/RequestTypes";
const Requests: React.FC = () => {
  const { requests, isSuccess: requestsFetched } = useRequests(
    ReqTypes.INVENTORY_AQUISITION
  );

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Requests</Heading>
          <Spacer></Spacer>
          <Link to="create">
            <Button
              leftIcon={<Icon as={AiOutlinePlus} boxSize="22px" />}
              colorScheme="green"
              variant="solid"
            >
              Create Request
            </Button>
          </Link>
        </Flex>
        {requestsFetched && (
          <CustomizeableTable
            heads={requestHeads}
            data={requests}
            filterable
            selectFilter={["category"]}
          />
        )}
      </Box>
    </>
  );
};

export default Requests;
