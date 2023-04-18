import {
  Button,
  VStack,
  Flex,
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverBody,
  StackDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { HiOutlineDotsVertical } from "react-icons/hi";

type Props = {
  backButtonLink: string;
  onDelete: () => void;
};

const DetailToolbar = ({ backButtonLink, onDelete }: Props) => {
  return (
    <Flex justifyContent="space-between">
      <Link to={backButtonLink}>
        <Button leftIcon={<ArrowBackIcon />} variant="ghost" size={"sm"}>
          Back
        </Button>
      </Link>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button p={0} m={0}>
            <Icon
              as={HiOutlineDotsVertical}
              boxSize="40px"
              p={2}
              rounded="lg"
              bg="blue"
              color={"white"}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent width={"min-fitcontent"}>
          <PopoverBody p={0}>
            <VStack alignItems={"flex-start"}>
              <Button
                variant={"ghost"}
                leftIcon={<EditIcon mb={1} />}
                minWidth="100%"
              >
                <Link to={"edit"}>Edit</Link>
              </Button>

              <Button
                variant={"ghost"}
                leftIcon={<DeleteIcon color={"red"} mb={1} />}
                onClick={onDelete}
              >
                Delete
              </Button>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default DetailToolbar;
