import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Testimonials from "./components/Testimonial";
import Packages from "./components/Package";
import ServicesComponent from "./components/Services";
import Contact from "./components/Contact";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <LandingPage />
                <CaseStudies />
                <Testimonials />
                <Packages />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="login"
          element={
            <>
              <Login />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <>
                <ServicesComponent />
                <Testimonials />
                <Packages />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/case-studies"
          element={
            <ProtectedRoute>
              <>
                <CaseStudies />
                <Testimonials />
                <Packages />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact-us"
          element={
            <ProtectedRoute>
              <>
                <Contact />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        <Route path="/register/login" element={<Login />} />
        {/* <Route path="/register" element={<Register/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
