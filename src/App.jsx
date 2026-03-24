import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter from here
import MainLayout from './components/layout/MainLayout';
import Home from './pages/home/Home';

function App() {
  return (
    // No <BrowserRouter> here! It's already in main.jsx
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} /> 
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Route>
    </Routes>
  );
}

export default App;