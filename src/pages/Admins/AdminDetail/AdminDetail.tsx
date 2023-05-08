import React, { FC } from "react";
import { Box, VStack, StackDivider, Flex, Text } from "@chakra-ui/react";
import ImageAndDetail from "../../../components/Detail/ImageAndDetail/ImageAndDetail";
import CustomDetail from "../../../components/Detail/CustomDetail/CustomDetail";
import DetailToolbar from "../../../components/Detail/DetailToolbar/DetailToolbar";
import OrganizationGeneralDetail from "../../../components/OrganizationGeneralDetail/OrganizationGeneralDetail";
import { useParams } from "react-router-dom";
import { useUser } from "../../../hooks/Users/useFetchUser";
import { useDeleteUser } from "../../../hooks/Users/useDeleteUser";

const AdminDetail: FC = () => {
  const { id } = useParams();
  const { user } = useUser(id);
  const { name, image, contact, email, organization } = user ?? {};
  const { deleteUser } = useDeleteUser();

  return (
    <Box bg="whiteAlpha.900" rounded={10} p={5} minHeight="83vh">
      {user && (
        <VStack
          divider={<StackDivider borderColor="gray.300" />}
          align="stretch"
          spacing={8}
        >
          <DetailToolbar
            backButtonLink="/admins"
            onDelete={() => deleteUser(id)}
          />
          <ImageAndDetail
            heading={"Admin Detail"}
            src={image}
            name={name}
            contact={contact}
            email={email}
          />
          <OrganizationGeneralDetail
            imageSrc={organization?.image}
            name={organization?.name}
            email={organization?.email}
            repName={organization?.representativeName}
            repContact={organization?.representativeContact}
            bio={organization?.bio}
            address={organization?.address}
          />
        </VStack>
      )}
    </Box>
  );
};

export default AdminDetail;
