import { useAuth } from "../../hooks/Auth/useAuth";
import { UserRole } from "../../constant/UserRoles";

interface NavLinkProps {
  label: string;
  to: string;
}

const superAdminLinks: NavLinkProps[] = [
  { label: "Dashboard", to: "/superadmin/dashboard" },
  { label: "Organizations", to: "/organizations" },
  { label: "Admins", to: "/admins" },
  { label: "Complaints", to: "/complaints" },
];

const adminLinks: NavLinkProps[] = [
  { label: "Dashboard", to: "/admin/dashboard" },
  { label: "Inventory", to: "/inventory" },
  { label: "Categories", to: "/categories" },
  { label: "Employees", to: "/employees" },
  { label: "Requests", to: "/requests" },
  { label: "Returns", to: "/returns" },
  { label: "Complaints", to: "/complaints" },
  { label: "Vendors", to: "/vendors" },
];

const employeeLinks = [
  { label: "Dashboard", to: "/employee/dashboard" },
  { label: "Requests", to: "/requests" },
  { label: "Complaints", to: "/complaints" },
];

const getLinks = (role: UserRole): NavLinkProps[] => {
  switch (role) {
    case UserRole.SUPER_ADMIN:
      return superAdminLinks;
    case UserRole.ADMIN:
      return adminLinks;
    case UserRole.EMPLOYEE:
      return employeeLinks;
    default:
      return [];
  }
};

export const linksConfig = {
  [UserRole.SUPER_ADMIN]: superAdminLinks,
  [UserRole.ADMIN]: adminLinks,
  [UserRole.EMPLOYEE]: employeeLinks,
};

export default getLinks;
