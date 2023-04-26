import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

export const NavLink = ({ children, to }: NavLinkProps) => {
  return (
    <Link
      to={to}
      as={RouterLink}
      px={2}
      py={1}
      color="gray.600"
      rounded={"md"}
      _hover={{
        textDecoration: "underline",
      }}
    >
      {children}
    </Link>
  );
};
