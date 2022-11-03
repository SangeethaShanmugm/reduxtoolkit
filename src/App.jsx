import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Navbar from "./components/headerComp/Navbar";
import Home from "./pages/Home";
import Signup from "./components/authComp/Signup";
import Signin from "./components/authComp/Signin";
import Sidebar from "./components/sidebarComp/Sidebar";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import UserDashboard from "./components/User/UserDashboard";

const App = () => {
  let { role } = useSelector(
    state => state.auth
  );


  return (
    <BrowserRouter>   
    <Navbar />
    <Toaster />
     <main>
     <Routes>
        <Route path="/" element={role === "admin" ? <Dashboard /> : <UserDashboard />} />
        <Route path="/dashboard" element={role === "admin" ? <Dashboard /> : <Signin />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />        
      </Routes>
     </main>
    
  </BrowserRouter>
    
  );
};

export default App;
