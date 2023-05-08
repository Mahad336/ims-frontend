import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { useOrganizations } from "../../hooks/Organizations/useOrganizations";
import { organizationHeads } from "../../constant/tableHeads";

export const showImage = (src) => (
  <Image src={src} rounded="lg" boxSize="40px" objectFit="cover" />
);

const Organizations: React.FC = () => {
  const { organizations } = useOrganizations();

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
        {organizations && (
          <CustomizeableTable
            heads={organizationHeads}
            data={organizations.map((org) => ({
              ...org,
              src: showImage(org.src),
            }))}
            filterable
            selectFilter={["location"]}
          />
        )}
      </Box>
    </>
  );
};

export default Organizations;
