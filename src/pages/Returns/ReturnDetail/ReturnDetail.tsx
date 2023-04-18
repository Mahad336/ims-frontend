import React, { FC } from "react";
import {
  Box,
  Button,
  VStack,
  StackDivider,
  Flex,
  Heading,
  Text,
  Image,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";

const ReturnDetail: FC = () => {
  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
        spacing={8}
      >
        <Flex justifyContent="space-between">
          <Flex gap={3.5} alignItems="center">
            <Button leftIcon={<ArrowBackIcon />} variant="ghost" size={"sm"}>
              Back
            </Button>
            <Heading fontWeight="medium" size={"lg"}>
              Return ID: 9624
            </Heading>
            <Button colorScheme={"blue"} px={5} size="sm">
              Pending
            </Button>
            <Text>Submission Date: 11/12/22</Text>
          </Flex>
          <Flex gap={4}>
            <Button colorScheme={"green"} p={5} rounded="xl" size={"sm"}>
              Repaired
            </Button>
            <Button
              colorScheme={"green"}
              p={5}
              rounded="xl"
              size={"sm"}
              isDisabled
            >
              Replaced
            </Button>
          </Flex>
        </Flex>
        <CustomDetail
          label="Description"
          detail=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              convallis, elit vel tempus aliquam, dui felis sollicitudin sem, eu
              hendrerit nisi ex eget eros. Proin eget ipsum quis nisi placerat
              imperdiet id pulvinar nulla. Ut odio arcu, dictum in vulputate ut,
              vehicula eu augue. Aenean tempor ultrices urna eget pretium."
        />
        <CustomDetail label="Item Name" detail="Macbook Pro 13 2015" />
        <CustomDetail label="Category" detail="Electronics" />
        <CustomDetail label="Sub-Category" detail="Mouse" />

        <ImageAndDetail
          heading={"Request Submitted by"}
          src={"https://bit.ly/dan-abramov"}
          name={"Emery Siphron"}
          department={"Development"}
          contact={"+92373393298"}
          email={"ugreen@Hotmail.com"}
        />
      </VStack>
    </Box>
  );
};

export default ReturnDetail;
