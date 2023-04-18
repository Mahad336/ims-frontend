import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../Detail/CustomDetail/CustomDetail";

interface Props {
  title?: boolean;
  imageSrc: string;
  name: string;
  email: string;
  repName: string;
  repContact: string;
  bio: string;
  address: string;
}

const OrganizationGeneralDetail: FC<Props> = ({
  title = true,
  imageSrc,
  name,
  email,
  repName,
  repContact,
  bio,
  address,
}) => {
  return (
    <VStack
      alignItems={"flex-start"}
      align="stretch"
      spacing={8}
      divider={<StackDivider borderColor="gray.200" />}
    >
      <ImageAndDetail
        heading={title ? "Organization" : ""}
        src={imageSrc}
        name={name}
        email={email}
      />
      <CustomDetail label="Representative Name" detail={repName} />
      <CustomDetail label="Representative Contact No." detail={repContact} />
      <CustomDetail label="Bio" detail={bio} />
      <CustomDetail label="Address" detail={address} />
    </VStack>
  );
};

export default OrganizationGeneralDetail;
