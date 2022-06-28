import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register';
import Home from './Home';
import Security from './Security';



const appRoutes =
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/home" element={<Security component={<Home />}/>} />
      {/*
     <Route path="/home" element={<Home />} />
      */}

    </Routes>
  </BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  appRoutes
);