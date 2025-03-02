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
import PackageScreen from "./components/PackageScreen";
import Cartpg from "./components/Cartpage";
import Checkoutpg from "./components/Checkoutpage";
import PaymentForm from "./components/PaymentForm";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFailure from "./components/PaymentFailed";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Admin";

function App() {
  return (
    <AuthProvider>
    
    <Router>
    

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <CaseStudies />
              <Testimonials />
              <Packages />
              <Footer />
            </>
          }
        />

        <Route
          path="/register/login"
          element={
            <>
              <Login />
              <Footer />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Register />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <ServicesComponent />
              <Testimonials />
              <Packages />
              <Footer />
            </>
          }
        />
        <Route
          path="/case-studies"
          element={
            <>
              <CaseStudies />
              <Testimonials />
              <Packages />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/packagescreen" element={
          <>
          <PackageScreen />
          <Footer />
          </>
        } />

        <Route path="/cart" element={
          <>
          <Cartpg />
          <Footer />
          </>
        } />

        <Route path="/checkout" element={
          <>
          <Checkoutpg />
          <Footer />
          </>
        } />

<Route
          path="/admindashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />

<Route path="/paymentform" element={<PaymentForm />} />

<Route path="/payment-success" element={<PaymentSuccess />} />
<Route path="/payment-failure" element={<PaymentFailure />} />


        <Route path="/register" element={<Register />} />
        {/*
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={<PaymentForm/>}/>
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} /> */}
      </Routes>
    </Router>
      
    </AuthProvider>
  );
}

export default App;
