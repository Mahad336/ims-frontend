import { Flex, Box, Button, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface FormToolbarProps {
  backButtonLink: string;
  pageTitle: string;
  onCancel?: () => void;
  onSave?: () => void;
}

export default function FormToolbar({
  backButtonLink,
  pageTitle,
  onCancel,
  onSave,
}: FormToolbarProps) {
  return (
    <Flex alignItems="center" gap={5}>
      <Box>
        <Link to={backButtonLink}>
          <Button colorScheme="gray" size="sm">
            Back
          </Button>
        </Link>
      </Box>
      <Box>
        <Heading fontWeight={400}>{pageTitle}</Heading>
      </Box>
      <Spacer />
      <Button colorScheme="gray" size="lg" color="gray.600" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" colorScheme="green" size="lg" onClick={onSave}>
        Save
      </Button>
    </Flex>
  );
}
