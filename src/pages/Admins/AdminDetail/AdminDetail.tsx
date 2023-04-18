import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";
import OrganizationGeneralDetail from "../../../components/OrganizationGeneralDetail/OrganizationGeneralDetail";

const AdminDetail: FC = () => {
  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        align="stretch"
        spacing={8}
      >
        <DetailToolbar
          backButtonLink="/admins"
          onDelete={() => {
            console.log("deleted");
          }}
        />
        <ImageAndDetail
          heading={"Admin Detail"}
          src={"https://bit.ly/dan-abramov"}
          name={"Emery Siphron"}
          contact={"+92373393298"}
          email={"ugreen@Hotmail.com"}
        />
        <OrganizationGeneralDetail
          imageSrc="https://picsum.photos/200/300?random=3"
          name="TechSwipe Pvt.Ltd"
          email="ugreen@Hotmail.com"
          repName="John Doe"
          repContact="+923377654823"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              convallis, elit vel tempus aliquam, dui felis sollicitudin sem, eu
              hendrerit nisi ex eget eros. Proin eget ipsum quis nisi placerat
              imperdiet id pulvinar nulla. Ut odio arcu, dictum in vulputate ut,
              vehicula eu augue. Aenean tempor ultrices urna eget pretium"
          address="2177 Hide A Way Road, Lahore, Pakistan"
        />
      </VStack>
    </Box>
  );
};

export default AdminDetail;
