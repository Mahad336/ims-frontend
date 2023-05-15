import React from "react";
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { Link } from "react-router-dom";
import { useVendors } from "../../hooks/Vendors/useVendors";
import { VendorHeads } from "../../constant/tableHeads";

const Vendors: React.FC = () => {
  const { vendors } = useVendors();

  //deleting categories array we getting which we used in create Item
  vendors?.forEach((vendor) => delete vendor?.categories);
  return (
    <>
      <Box bg="whiteAlpha.900" rounded={10} p={5} height="83vh">
        <Flex>
          <Heading size="md">Vendors</Heading>
          <Spacer></Spacer>
          <Link to="add">
            <Button
              leftIcon={<AiOutlinePlus />}
              colorScheme="green"
              variant="solid"
            >
              Add
            </Button>
          </Link>
        </Flex>
        {vendors && (
          <CustomizeableTable
            heads={VendorHeads}
            data={vendors}
            filterable
            selectFilter={["category", "subcategory"]}
            viewLink="vendors"
          />
        )}
      </Box>
    </>
  );
};

export default Vendors;
