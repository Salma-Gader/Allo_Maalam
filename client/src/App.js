
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
function App() {
  return (

<BrowserRouter>
<Routes>
<Route path="/Login" element={<Login />} />
<Route path="/Register" element={<Register />} />
</Routes>
</BrowserRouter>

  );
}

export default App;
