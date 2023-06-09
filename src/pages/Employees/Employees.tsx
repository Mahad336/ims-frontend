import React from "react";
import { Box, Heading, Flex, Spacer, Button, Icon } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { Link } from "react-router-dom";
import { useFetchUsers } from "../../hooks/Users/useFetchUsers";
import { employeeHeads } from "../../constant/tableHeads";

const Employees: React.FC = () => {
  const { users: employees } = useFetchUsers();
  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Employees</Heading>
          <Spacer></Spacer>
          <Link to="create">
            <Button
              leftIcon={<Icon as={AiOutlinePlus} boxSize="22px" />}
              colorScheme="green"
              variant="solid"
            >
              Create Employee
            </Button>
          </Link>
        </Flex>
        {employees && (
          <CustomizeableTable
            heads={employeeHeads}
            data={employees}
            filterable
            selectFilter={["department"]}
            viewLink="employees"
          />
        )}
      </Box>
    </>
  );
};

export default Employees;
