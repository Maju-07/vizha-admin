import Sidebar from "./app/dashboard/page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Customers from "@/pages/Customers";
import Vendor from "@/pages/Vendor";
import Verification from "@/pages/Verification";
import VendorProfile from "@/pages/vendorProfile/index";
import Login from "@/pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verification/:id" element={<VendorProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
