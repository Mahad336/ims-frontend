import React from "react";

import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.png";
import useLogout from "../../hooks/Auth/useLogout";
import { useAuth } from "../../hooks/Auth/useAuth";
import getLinks from "../../navigation/config/LinksConfig";
import { NavLink } from "./Navlink";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate: logout } = useLogout();

  const { user } = useAuth();

  const Links = getLinks(user?.role?.name);

  return (
    <Box bg="whiteAlpha.900" px={4} py={2}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: !isOpen ? "none" : "inherit" }}
          onClick={isOpen ? onClose : onOpen}
          variant="unstyled"
          _focus={{ outline: "none" }}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Image
            boxSize="50px"
            objectFit="cover"
            alt="Dan Abramov"
            src={logo}
          />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link, index) => (
              <NavLink key={index} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <Text p={3}>{user?.name}</Text>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar size={"md"} src={user?.image} />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Edit</MenuItem>
              <MenuItem
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link, index) => (
              <NavLink key={index} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
