import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './components/login.js';
import Register from './components/register.js';
import ProtectedRoutes from './services/protactedroutes.js';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
     
      <Route path="/" element={<ProtectedRoutes/>}>
      <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App