import React from "react";
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { Link } from "react-router-dom";
import { useVendor } from "../../hooks/Vendors/useVendor";
import { VendorHeads } from "../../constant/tableHeads";
import { mapVendorData } from "../../utils/mapEntityData";

const Vendors: React.FC = () => {
  const { vendors, isSuccess } = useVendor();
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
        {isSuccess && (
          <CustomizeableTable
            heads={VendorHeads}
            data={mapVendorData(vendors)}
            filterable
            selectFilter={["name", "category", "quantity"]}
          />
        )}
      </Box>
    </>
  );
};

export default Vendors;
