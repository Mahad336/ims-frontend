import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { useOrganization } from "../../hooks/Organizations/useOrganization";

const Organizations: React.FC = () => {
  const heads: string[] = [
    "id",
    "Image",
    "name",
    "category",
    "quantity",
    "price",
    "Action",
  ];

  const { organizations, isSuccess } = useOrganization();

  const data = organizations?.map((organization) => ({
    id: organization.id,
    src: organization.image,
    name: organization.name,
    location: organization.address,
    email: organization.email,
    contact: organization.representativeContact,
  }));

  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Organizations</Heading>
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
        <CustomizeableTable
          heads={heads}
          data={data}
          filterable
          selectFilter={["name", "category", "quantity"]}
        />
      </Box>
    </>
  );
};

export default Organizations;
