//App.jsx
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseconfig";
import Contact from "./pages/Contact";
import Register from "./pages/register";
import "./App.css";
import Login from "./pages/login";
import Gallery from "./pages/Gallery";
import Pets from "./pages/Pets";
import Petdetails from "./pages/Petdetails";
import Productdetails from "./pages/Productdetails";

import Index from "./Home/Index";
import DonatePet from "./pages/DonatePet";
import Ourteam from "./pages/Ourteam";
import Blogdetails from "./pages/Blogdetails";

import PetCare from "./Home/PetCare";

import PetStatus from "./pages/PetStatus";
import MyAdoptedPets from "./pages/MyAdoptedPets";
import PetBreed from "./Home/PetBreed";
import PetAdopt from "./Home/PetAdopt";
import PetWoocommerce from "./Home/PetWoocommerce";
import About from "./About/About";
import Ourshop from "./Shop/Ourshop";

import Pet from "./components/Pet";
import PetInterest from "./pages/PetInterest";
import Cart from "./Shop/cart";
import Wishlist from "./pages/wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./Shop/Checkout";
import MyOrders from "./Shop/MyOrders";
import UserProfile from "./pages/UserProfile";
import Rules from "./pages/rules";
import Chat from "./pages/Chat";


function App() {
  useEffect(() => {
    // Check if this is a new tab session
    const sessionStarted = sessionStorage.getItem("isSessionStarted");

    if (!sessionStarted) {
      // If new tab, force sign out to ensure a fresh session
      signOut(auth).then(() => {
        sessionStorage.setItem("isSessionStarted", "true");
        console.log("New tab detected, session cleared.");
      });
    }
  }, []);

  return (
    <>
      {/* <Contact /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/About" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Pets" element={<Pets />} />
        
        <Route path="/Index" element={<Index />} />
        <Route path="/DonatePet" element={<ProtectedRoute><DonatePet /></ProtectedRoute>} />
        <Route path="/Ourteam" element={<Ourteam />} />
        <Route path="/Blogdetails" element={<Blogdetails />} />
       
        <Route path="/PetCare" element={<PetCare />} />
        
        <Route path="/PetBreed" element={<PetBreed />} />
        <Route path="/PetAdopt" element={<PetAdopt />} />
        <Route path="/PetWoocommerce" element={<PetWoocommerce />} />
        <Route path="/About" element={<About />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="/Ourshop" element={<Ourshop />} />
        
        <Route path="/rules/:id" element={<ProtectedRoute><Rules /></ProtectedRoute>} />
        <Route path="/showinterest/:id" element={<PetInterest />} />
        <Route path="/petdetails/:id" element={<Petdetails />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />

        <Route path="/Checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/MyOrders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
        <Route path="/PetStatus" element={<ProtectedRoute><PetStatus /></ProtectedRoute>} />
        <Route path="/MyAdoptedPets" element={<ProtectedRoute><MyAdoptedPets /></ProtectedRoute>} />
        <Route path="/UserProfile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />

      </Routes>
    </>
  );
}
export default App;
