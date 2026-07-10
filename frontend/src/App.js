import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute
from "./components/ProtectedRoute";
import Services from "./pages/Services";
import BookService from "./pages/BookService";
import MyBookings from "./pages/MyBookings";

import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminBookings from "./pages/AdminBookings";

import CaregiverRegister from "./pages/CaregiverRegister";
import Caregivers from "./pages/Caregivers";
import PatientProfile from "./pages/PatientProfile";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
 path="/services"
 element={<Services />}
/>

<Route
 path="/book/:serviceName"
 element={
  <ProtectedRoute>
   <BookService />
  </ProtectedRoute>
 }
/>

<Route
 path="/my-bookings"
 element={
  <ProtectedRoute>
   <MyBookings />
  </ProtectedRoute>
 }
/>

<Route
 path="/admin"
 element={<AdminDashboard />}
/>

<Route
 path="/admin/users"
 element={<AdminUsers />}
/>

<Route
 path="/admin/bookings"
 element={<AdminBookings />}
/>

<Route
 path="/caregiver-register"
 element={<CaregiverRegister />}
/>

<Route
 path="/caregivers"
 element={<Caregivers />}
/>

<Route
 path="/patient-profile"
 element={<PatientProfile />}
/>

      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;