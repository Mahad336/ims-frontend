import React from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  VStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

interface Props {
  employee: {
    id: number;
    image: string;
    name: string;
    email: string;
    designation: string;
    department: string;
    contact: string;
    education: string;
    companyExperience: string;
    totalExperience: string;
  };
}

const EmployeeProfile = ({ employee }: Props) => {
  const {
    id,
    image,
    name,
    email,
    designation,
    department,
    contact,
    education,
    companyExperience,
    totalExperience,
  } = employee;

  return (
    <Box borderBottom="1px solid" borderBottomColor="gray.300">
      <Flex justifyContent="space-between">
        <Heading size="md">Dashboard</Heading>
        <Link to={"/employee/" + id}>
          <Button leftIcon={<EditIcon />} colorScheme="green">
            Edit Porfile
          </Button>
        </Link>
      </Flex>
      <Flex p={10} gap={20} paddingBottom={5}>
        <VStack minWidth="10%">
          <Image rounded={"2xl"} boxSize="120px" src={image} />
        </VStack>
        <Flex justifyContent="space-between" width="90%" flexWrap="wrap">
          <VStack>
            <Text>Full Name</Text>
            <Text fontWeight={"semibold"}>{name}</Text>
            <Spacer></Spacer>
            <Text>Email Address</Text>
            <Text fontWeight={"semibold"}>{email}</Text>
          </VStack>
          <VStack>
            <Text>Designation</Text>
            <Text fontWeight={"semibold"}>{designation}</Text>
            <Spacer></Spacer>
            <Text>Department</Text>
            <Text fontWeight={"semibold"}>{department}</Text>
          </VStack>
          <VStack>
            <Text>Contact Number</Text>
            <Text fontWeight={"semibold"}>{contact}</Text>
            <Spacer></Spacer>
            <Text>Education</Text>
            <Text fontWeight={"semibold"}>{education}</Text>
          </VStack>
          <VStack>
            <Text>Company Experience</Text>
            <Text fontWeight={"semibold"}>{companyExperience}</Text>
            <Spacer></Spacer>
            <Text>Total Experience</Text>
            <Text fontWeight={"semibold"}>{totalExperience}</Text>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default EmployeeProfile;
