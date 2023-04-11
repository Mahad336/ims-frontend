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
  id: number;
  imageUrl: string;
  name: string;
  emailAddress: string;
  Desgination: string;
  Department: string;
  ContactNumber: string;
  Education: string;
  CompanyExperience: string;
  TotalExperience: string;
}

const EmployeeProfile = ({
  id,
  imageUrl,
  name,
  emailAddress,
  Desgination,
  Department,
  ContactNumber,
  Education,
  CompanyExperience,
  TotalExperience,
}: Props) => {
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
        <VStack width="10%">
          <Image rounded={"2xl"} boxSize="120px" src={imageUrl} />
        </VStack>
        <Flex justifyContent="space-between" width="90%" flexWrap="wrap">
          <VStack>
            <Text>Full Name</Text>
            <Text fontWeight={"semibold"}>{name}</Text>
            <Spacer></Spacer>
            <Text>Email Address</Text>
            <Text fontWeight={"semibold"}>{emailAddress}</Text>
          </VStack>
          <VStack>
            <Text>Designation</Text>
            <Text fontWeight={"semibold"}>{Desgination}</Text>
            <Spacer></Spacer>
            <Text>Department</Text>
            <Text fontWeight={"semibold"}>{Department}</Text>
          </VStack>
          <VStack>
            <Text>Contact Number</Text>
            <Text fontWeight={"semibold"}>{ContactNumber}</Text>
            <Spacer></Spacer>
            <Text>Education</Text>
            <Text fontWeight={"semibold"}>{Education}</Text>
          </VStack>
          <VStack>
            <Text>Company Experience</Text>
            <Text fontWeight={"semibold"}>{CompanyExperience}</Text>
            <Spacer></Spacer>
            <Text>Total Experience</Text>
            <Text fontWeight={"semibold"}>{TotalExperience}</Text>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default EmployeeProfile;
