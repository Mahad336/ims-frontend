import React from "react";
import { Box, Heading, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CustomizeableTable from "../../components/Table/CustomizeableTable/CustomizeableTable";
import { Link } from "react-router-dom";
import { useFetchUsers } from "../../hooks/Users/useFetchUsers";
import Navbar from "../../components/Navbar/Navbar";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const Admins: React.FC = () => {
  const heads: string[] = [
    "id",
    "Image",
    "Name",
    "Organization",
    "Email",
    "Contact",
    "Action",
  ];
  const showImage = (src) => (
    <Image src={src} rounded="lg" boxSize="40px" objectFit="cover" />
  );

  const { users, isSuccess } = useFetchUsers();
  console.log(users?.organizationId);

  const data = users?.map((user) => ({
    id: user.id,
    src: showImage(user.image),
    name: user.name,
    organization: user.organization?.name,
    email: user.email,
    contact: user.contact,
  }));

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
        {isSuccess && (
          <CustomizeableTable
            heads={heads}
            data={data}
            filterable
            selectFilter={["organization"]}
          />
        )}
      </Box>
    </>
  );
};

export default Admins;
