import React, { FC } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import {
  HStack,
  StackDivider,
  Text,
  Heading,
  Flex,
  VStack,
  Icon,
} from "@chakra-ui/react";

interface Stat {
  name: string;
  totalCount: string;
  monthlyCount: string;
}
interface Props {
  data: Stat[];
}

const DashboardStats: FC<Props> = ({ data }) => {
  return (
    <>
      <HStack
        divider={<StackDivider borderColor="gray.300" />}
        spacing={4}
        justifyContent="space-between"
        borderBottom="1px solid"
        borderBottomColor="gray.300"
        p={5}
      >
        {data.map((stat: Stat) => {
          return (
            <VStack
              key={stat.name}
              h="auto"
              spacing="14px"
              alignItems="flex-start"
            >
              <Text fontSize="md" fontWeight="bold">
                {stat.name}
              </Text>
              <Flex alignItems={"center"}>
                <Heading>{stat.totalCount}</Heading>
                <Icon boxSize={8} as={TiArrowSortedUp} color="green.400"></Icon>
              </Flex>
              <Text fontSize="sm" color="gray.500">
                {stat.monthlyCount}
              </Text>
            </VStack>
          );
        })}
      </HStack>
    </>
  );
};

export default DashboardStats;
