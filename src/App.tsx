import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import LoginPage from "./auth/Login/Login";
import ResetPassword from "./auth/ResetPassword/ResetPassword";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import Inventory from "./pages/Inventory/Inventory";
import Categories from "./pages/Categories/Categories";
import Employees from "./pages/Employees/Employees";
import Requests from "./pages/Requests/Requests";
import Returns from "./pages/Returns/Returns";
import Complaints from "./pages/Complaints/Complaints";
import Vendors from "./pages/Vendors/Vendors";
import Admins from "./pages/Admins/Admins";
import Organizations from "./pages/Organizations/Organizations";
import "./App.css";
import AddVendorForm from "./pages/Vendors/AddVendor/AddVendor";
import CreateComplaint from "./pages/Complaints/CreateComplaint/CreateComplaint";
import CreateRequest from "./pages/Requests/CreateRequest/CreateRequest";
import CreateItem from "./pages/Inventory/CreateItem/CreateItem";
import CreateAdmin from "./pages/Admins/CreateAdmin/CreateAdmin";
import CreateOrganization from "./pages/Organizations/CreateOrganization/CreateOrganization";
import CreateEmployee from "./pages/Employees/CreateEmployee/CreateEmployee";
import AddCategories from "./pages/Categories/AddCategories/AddCategories";
import AddSubcategories from "./pages/Categories/AddSubcategories/AddSubcategories";
import AdminDashboard from "./pages/Dashboard/Admin/AdminDashboard";
import EmployeeDashboard from "./pages/Dashboard/Employee/EmployeeDashboard";
import SuperAdminDashboard from "./pages/Dashboard/SuperAdmin/SuperAdminDashboard";
import ValidateOtp from "./auth/ValidateOtp/ValidateOtp";
import EditOrganization from "./pages/Organizations/EditOrganization/EditOrganization";
import EditAdmin from "./pages/Admins/EditAdmin/EditAdmin";
import EditEmployee from "./pages/Employees/EditEmployee/EditEmployee";
import EditCategory from "./pages/Categories/EditCategories/EditCategories";
import EditVendor from "./pages/Vendors/EditVendor/EditVendor";
import ComplaintDetail from "./pages/Complaints/ComplaintDetail/ComplaintDetail";
import RequestDetail from "./pages/Requests/RequestDetail/RequestDetail";
import ReturnDetail from "./pages/Returns/ReturnDetail/ReturnDetail";
import ItemDetail from "./pages/Inventory/ItemDetail/ItemDetail";
import VendorDetail from "./pages/Vendors/VendorDetail/VendorDetail";
import CategoryDetail from "./pages/Categories/CategoryDetail/CategoryDetail";
import AdminDetail from "./pages/Admins/AdminDetail/AdminDetail";
import OrganizationDetail from "./pages/Organizations/OrganizationDetail/OrganizationDetail";
import EmployeeDetail from "./pages/Employees/EmployeeDetail/EmployeeDetails";
import EditItem from "./pages/Inventory/EditItem/EditItem";
import { UserRole } from "./constant/UserRoles";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/validate-otp" element={<ValidateOtp />} />
          <Route path="/reset-password/" element={<ResetPassword />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route element={<PrivateRoutes roles={[UserRole.SUPER_ADMIN]} />}>
            <Route
              path="superAdmin/dashboard"
              element={<SuperAdminDashboard />}
            />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/organizations/:id" element={<OrganizationDetail />} />
            <Route
              path="/organizations/:id/edit"
              element={<EditOrganization />}
            />
            <Route
              path="/organizations/create"
              element={<CreateOrganization />}
            />

            <Route path="/admins" element={<Admins />} />
            <Route path="/admins/:id" element={<AdminDetail />} />
            <Route path="/admins/:id/edit" element={<EditAdmin />} />
            <Route path="/admins/create" element={<CreateAdmin />} />
          </Route>

          <Route element={<PrivateRoutes roles={[UserRole.ADMIN]} />}>
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:id" element={<ItemDetail />} />
            <Route path="/inventory/:id/edit" element={<EditItem />} />
            <Route path="/inventory/create" element={<CreateItem />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<CategoryDetail />} />
            <Route path="/categories/:id/edit" element={<EditCategory />} />
            <Route path="/categories/create" element={<AddCategories />} />
            <Route
              path="/categories/:id/subcategory/add"
              element={<AddSubcategories />}
            />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/create" element={<CreateEmployee />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendors/:id" element={<VendorDetail />} />
            <Route path="/vendors/:id/edit" element={<EditVendor />} />
            <Route path="/vendors/add" element={<AddVendorForm />} />
          </Route>

          <Route element={<PrivateRoutes roles={[UserRole.EMPLOYEE]} />}>
            <Route path="employee/dashboard" element={<EmployeeDashboard />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                roles={[
                  UserRole.EMPLOYEE,
                  UserRole.ADMIN,
                  UserRole.SUPER_ADMIN,
                ]}
              />
            }
          >
            <Route path="/employees/:id" element={<EmployeeDetail />} />
            <Route path="/employees/:id/edit" element={<EditEmployee />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/requests/:id" element={<RequestDetail />} />
            <Route path="/requests/create" element={<CreateRequest />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/returns/:id" element={<ReturnDetail />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/complaints/:id" element={<ComplaintDetail />} />
            <Route path="/complaints/create" element={<CreateComplaint />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
