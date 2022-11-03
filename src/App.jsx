import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Navbar from "./components/headerComp/Navbar";
import Home from "./pages/Home";
import Signup from "./components/authComp/Signup";
import Signin from "./components/authComp/Signin";
import Sidebar from "./components/sidebarComp/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Navbar />
    <Toaster />
     <main>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />        
      </Routes>
     </main>
    </Sidebar>
  </BrowserRouter>
    
  );
};

export default App;
