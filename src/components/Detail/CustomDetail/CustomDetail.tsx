import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  label: string;
  detail: string;
  firstChildWidth?: string;
}

const CustomDetail = ({ label, detail, firstChildWidth = "25%" }: Props) => {
  return (
    <Flex width={"100%"}>
      <Text width={firstChildWidth} fontWeight="semibold">
        {label}
      </Text>
      <Text width={"50%"}>{detail}</Text>
    </Flex>
  );
};

export default CustomDetail;
