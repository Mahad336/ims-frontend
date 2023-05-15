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
import { useRequest } from "../../../hooks/Requests/useRequest";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../utils/formattedDate";
import { useUpdateRequest } from "../../../hooks/Requests/useUpdateRequest";

const ReturnDetail: FC = () => {
  const { id } = useParams();
  const { request } = useRequest(id);
  const {
    status,
    item,
    name,
    description,
    submittedBy: user,
    createdDate,
  } = request ?? {};

  const { mutate } = useUpdateRequest();

  const handleRejectRequest = () => {
    mutate({ id, requestData: { status: "rejected" } });
  };
  const handleApproveRequest = () => {
    mutate({ id, requestData: { status: "approved" } });
  };

  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      {request && (
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
                Return ID: {id}
              </Heading>
              <Button colorScheme={"blue"} px={5} size="sm">
                {status}
              </Button>
              <Text>Submission Date: {formatDate(createdDate)}</Text>
            </Flex>
            <Flex gap={4}>
              <Button
                colorScheme={"red"}
                p={5}
                rounded="xl"
                size={"sm"}
                onClick={handleRejectRequest}
              >
                Reject Request
              </Button>
              <Button
                colorScheme={"green"}
                p={5}
                rounded="xl"
                size={"sm"}
                onClick={handleApproveRequest}
              >
                Approve Request
              </Button>
            </Flex>
          </Flex>
          <CustomDetail label="Description" detail={description} />
          <CustomDetail label="Item Name" detail={item?.name} />
          <CustomDetail label="Category" detail={item?.category?.name} />
          <CustomDetail label="Sub-Category" detail={item?.subcategory?.name} />

          <ImageAndDetail
            heading={"Request Submitted by"}
            src={user?.image}
            name={user?.name}
            department={user?.department}
            contact={user?.conact}
            email={user?.email}
          />
        </VStack>
      )}
    </Box>
  );
};

export default ReturnDetail;
