import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/Header/Pages/About/About";
import Contact from "./Components/Header/Pages/Contact/Contact";
import Services from "./Components/Header/Pages/Services/Services";
import Team from "./Components/Header/Pages/Team/Team";
import Home from "./Components/Home/Home";
import Login from "./Components/Header/Pages/Login/Login"; // Import the Login component
import Dashboard from "./Components/Admin/Dashboard";
import SignUp from "./Components/Header/Pages/SignUp/SignUp";
import Employee from "./Components/Admin/Employee";
import AddEmployee from "./Components/Admin/AddEmployee";
import EditEmployee from "./Components/Admin/EditEmployee";
import Customer from "./Components/Admin/Customer";
import AddCustomer from "./Components/Admin/AddCustomer";
import Orders from "./Components/Admin/Orders";
import AddOrder from "./Components/Admin/AddOrder";
import AddService from "./Components/Admin/AddService";
import PrivateRoute from "./Components/Admin/PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Fix the path for the Contact component */}
          <Route
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/customer" element={<Customer />}></Route>
            <Route path="/dashboard/employee" element={<Employee />}></Route>
            <Route
              path="/dashboard/add_employee"
              element={<AddEmployee />}
            ></Route>
            <Route
              path="/dashboard/edit_employee/:id"
              element={<EditEmployee />}
            ></Route>
            <Route path="/dashboard/orders" element={<Orders />}></Route>
            <Route
              path="/dashboard/add_customer"
              element={<AddCustomer />}
            ></Route>
            <Route path="/dashboard/add_order" element={<AddOrder />}></Route>
            <Route path="/dashboard/services" element={<Services />}></Route>
            <Route
              path="/dashboard/add_service"
              element={<AddService />}
            ></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
