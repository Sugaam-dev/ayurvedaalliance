import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter from here
import MainLayout from './components/layout/MainLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import OurStory from './pages/about/OurStory';
import OurProgram from './pages/about/OurProgram';
import OurTeam from './pages/about/OurTeam';
import OtherServices from './pages/about/OtherServices';
import OurTreatments from './pages/about/OurTreatments';
import Stay from './pages/about/Stay';


function App() {
  return (
    // No <BrowserRouter> here! It's already in main.jsx
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} /> 
        <Route path='about' element={<About/>} />
        {/* <Route path="about/ourstory" element={<OurStory />} />
        <Route path="about/ourprogram" element={<OurProgram />} />
         <Route path="about/ourteam" element={<OurTeam />} />
         <Route path="about/otherservices" element={<OtherServices />} />
         <Route path="about/ourtreatments" element={<OurTreatments />} />
          <Route path="about/stay" element={<Stay />} /> */}
           {/* <Route path="about/ourprogram" element={<OurProgram />} /> */}
         {/* <Route path="*" element={<div>Page Not Found</div>} />  */}
      </Route>
    </Routes>
  );
}

export default App;