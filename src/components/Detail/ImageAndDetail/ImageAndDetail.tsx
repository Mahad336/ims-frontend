import React from "react";
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

interface Props {
  src: string;
  heading?: string;
  name: string;
  department?: string;
  email?: string;
  contact?: string;
}

const ImageAndDetail = ({
  src,
  heading,
  name,
  department,
  email,
  contact,
}: Props) => {
  return (
    <VStack gap={2} alignItems="left">
      {heading && (
        <Text fontSize={"2xl"} fontWeight="medium">
          {heading}
        </Text>
      )}
      <HStack gap={2}>
        <Box>
          <Image src={src} rounded="lg" objectFit="cover" boxSize="130px" />
        </Box>
        <Stack gap={1.7}>
          <Heading fontWeight="medium" py={1}>
            {name}
          </Heading>
          {department && <Text>Department : {department}</Text>}
          {email && <Text>{email}</Text>}
          {contact && <Text>{contact}</Text>}
        </Stack>
      </HStack>
    </VStack>
  );
};
export default ImageAndDetail;
