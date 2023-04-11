import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import LoginPage from "./auth/login/Login";
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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <div className="App">
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route
                path="employee/dashboard"
                element={<EmployeeDashboard />}
              />
              <Route path="admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="superAdmin/dashboard"
                element={<SuperAdminDashboard />}
              />

              <Route path="/inventory" element={<Inventory />} />
              <Route path="/inventory/create" element={<CreateItem />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/create" element={<AddCategories />} />
              <Route
                path="/categories/:id/subcategory/add"
                element={<AddSubcategories />}
              />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employees/create" element={<CreateEmployee />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/requests/create" element={<CreateRequest />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/complaints/create" element={<CreateComplaint />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/vendors/add" element={<AddVendorForm />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/admins/create" element={<CreateAdmin />} />

              <Route path="/organizations" element={<Organizations />} />
              <Route
                path="/organizations/create"
                element={<CreateOrganization />}
              />
            </Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/validate-otp" element={<ValidateOtp />} />
            <Route path="/reset-password/" element={<ResetPassword />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
