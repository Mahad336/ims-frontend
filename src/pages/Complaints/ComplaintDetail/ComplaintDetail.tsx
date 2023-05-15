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
import { useComplaint } from "../../../hooks/Complaints/useComplaint";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../utils/formattedDate";
import { useDeleteComplaint } from "../../../hooks/Complaints/useDeleteComplaint";
import { useUpdateComplaint } from "../../../hooks/Complaints/useUpdateComplaint";
type Props = {};

const ComplaintDetail: FC<Props> = () => {
  const { id } = useParams();
  const { complaint } = useComplaint(id);
  const {
    status,
    description,
    attachments,
    submittedBy: user,
    organization,
    createdDate,
  } = complaint ?? {};
  const { mutate } = useUpdateComplaint();

  const handleResolveComplaint = () => {
    mutate({ id, complaintData: { status: "resolved" } });
  };

  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
        spacing={5}
      >
        <Flex justifyContent="space-between">
          <Flex gap={3.5} alignItems="center">
            <Button leftIcon={<ArrowBackIcon />} variant="ghost" size={"sm"}>
              Back
            </Button>
            <Heading fontWeight="medium">Complaint ID: {id}</Heading>
            <Button colorScheme={"blue"} px={5} size={"sm"}>
              {status}
            </Button>
            <Text>Submission Date: {formatDate(createdDate)}</Text>
          </Flex>
          <Button
            colorScheme={"green"}
            p={5}
            rounded="xl"
            size={"sm"}
            onClick={handleResolveComplaint}
            isDisabled={status === "resolved"}
          >
            Mark as Resolved
          </Button>
        </Flex>
        <Flex>
          <Text minWidth={"25%"} fontWeight="semibold">
            Description
          </Text>
          <VStack width={"60%"} alignItems="start">
            <Text>{description}</Text>
            <VStack alignItems="start">
              <Text fontWeight={"semibold"}>Attachments</Text>
              <Box display={"flex"} flexDirection={"row"} gap={5}>
                {attachments?.map((attachment, index) => (
                  <Image
                    key={index}
                    src={attachment}
                    alt="attachment Loading"
                    rounded="lg"
                    objectFit="cover"
                    boxSize={"90px"}
                  />
                ))}
              </Box>
            </VStack>
          </VStack>
        </Flex>
        <ImageAndDetail
          heading={"Complaint Submitted by"}
          src={user?.image}
          name={user?.name}
          department={user?.department}
          contact={user?.contact}
          email={user?.email}
        />

        <ImageAndDetail
          heading={"Organization"}
          src={organization?.image}
          name={organization?.name}
          email={organization?.email}
        />
      </VStack>
    </Box>
  );
};

export default ComplaintDetail;
