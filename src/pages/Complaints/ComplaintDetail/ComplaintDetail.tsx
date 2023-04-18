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
type Props = {};

const ComplaintDetail: FC<Props> = () => {
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
            <Heading fontWeight="medium">Complaint ID: 9624</Heading>
            <Button colorScheme={"blue"} px={5} size={"sm"}>
              Pending
            </Button>
            <Text>Submission Date: 11/12/22</Text>
          </Flex>
          <Button colorScheme={"green"} p={5} rounded="xl" size={"sm"}>
            Mark as Resolved
          </Button>
        </Flex>
        <Flex>
          <Text minWidth={"25%"} fontWeight="semibold">
            Description
          </Text>
          <VStack width={"60%"} alignItems="start">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              convallis, elit vel tempus aliquam, dui felis sollicitudin sem, eu
              hendrerit nisi ex eget eros. Proin eget ipsum quis nisi placerat
              imperdiet id pulvinar nulla. Ut odio arcu, dictum in vulputate ut,
              vehicula eu augue. Aenean tempor ultrices urna eget pretium.
              Suspendisse feugiat egestas nisi a pharetra. Fusce ac nisl
              commodo, sodales diam nec, pharetra neque. Nunc pulvinar ligula eu
              neque aliquet auctor. In laoreet, diam sit amet commodo vulputate,
              mauris elit gravida justo, et sodales ante lorem vitae dui. Nullam
              fringilla lobortis justo, at molestie libero cursus vel. Nullam
              mattis purus quis hendrerit vehicula. Aliquam cursus magna eget
              ipsum tempor, mattis convallis odio porta. Morbi finibus mauris ut
              nulla consectetur accumsan. Vestibulum aliquam diam nec elit
              volutpat, sit amet pellentesque quam venenatis. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Vivamus
              efficitur malesuada nunc, eget venenatis lorem laoreet cursus.
              Nullam feugiat aliquet lacus eget venenatis. Integer vehicula sem
              nec justo pellentesque elementum. Nulla aliquam tristique
              bibendum. Nunc ultrices lectus ante. Nullam ultrices lacus vitae
              efficitur rhoncus. Nulla vitae pellentesque neque. Cras venenatis,
              risus ac auctor luctus, sapien enim porta neque, sit amet mollis
              justo tellus sed est. Nam ipsum ligula, sodales dignissim elit in,
              tincidunt blandit massa. Quisque aliquam molestie hendrerit.
              Integer lacus dui, auctor sit amet nibh fermentum, scelerisque
              consequat odio. Donec ornare scelerisque ipsum, eget venenatis
              neque sagittis vitae
            </Text>
            <VStack alignItems="start">
              <Text fontWeight={"semibold"}>Attachments</Text>
              <Box boxSize="75px">
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  rounded="lg"
                  objectFit="cover"
                />
              </Box>
            </VStack>
          </VStack>
        </Flex>
        <ImageAndDetail
          heading={"Complaint Submitted by"}
          src={"https://bit.ly/dan-abramov"}
          name={"Emery Siphron"}
          department={"Development"}
          contact={"+92373393298"}
          email={"ugreen@Hotmail.com"}
        />

        <ImageAndDetail
          heading={"Organization"}
          src={"https://picsum.photos/200/300?random=3"}
          name={"TechSwipe Pvt Limited"}
          email={"ugreen@Hotmail.com"}
        />
      </VStack>
    </Box>
  );
};

export default ComplaintDetail;
