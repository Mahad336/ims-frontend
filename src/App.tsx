import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./auth/login/Login";
import ResetPassword from "./auth/ResetPassword/ResetPassword";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import Inventory from "./pages/inventory/Inventory";
import Categories from "./pages/categories/Categories";
import Employees from "./pages/employees/Employees";
import Requests from "./pages/requests/Requests";
import Returns from "./pages/returns/Returns";
import Complaints from "./pages/complaints/Complaints";
import Vendors from "./pages/vendors/Vendors";
import Admins from "./pages/admins/admins";
import Organizations from "./pages/organizations/organizations";
import "./App.css";
import AddVendorForm from "./pages/addVendor/AddVendor";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <div
          className="App"
          style={{
            padding: "40px 70px",
            background: "rgb(240,240,240)",
          }}
        >
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/vendors/add" element={<AddVendorForm />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/organizations" element={<Organizations />} />
            </Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:email" element={<ResetPassword />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
