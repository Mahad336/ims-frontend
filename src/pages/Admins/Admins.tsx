import React from "react";
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { Link } from "react-router-dom";
import { useFetchUsers } from "../../hooks/Users/useFetchUsers";
import { adminHeads } from "../../constant/tableHeads";
import { showImage } from "../Organizations/Organizations";
const Admins: React.FC = () => {
  const { users } = useFetchUsers();

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Admins</Heading>
          <Spacer></Spacer>
          <Link to="create">
            <Button
              leftIcon={<AiOutlinePlus />}
              colorScheme="green"
              variant="solid"
            >
              Add
            </Button>
          </Link>
        </Flex>
        {users && (
          <CustomizeableTable
            heads={adminHeads}
            data={users.map((user) => ({ ...user, src: showImage(user.src) }))}
            filterable
            selectFilter={["organization"]}
            viewLink="admins"
          />
        )}
      </Box>
    </>
  );
};

export default Admins;
