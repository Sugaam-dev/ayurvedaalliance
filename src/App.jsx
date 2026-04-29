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
import Ayurveda from './pages/ayurveda/Ayurveda';
import AyurvedaSection from './pages/ayurveda/AyurvedaSection';
import Panchakarma from './pages/ayurveda/Panchakarma';
import Treatments from './pages/ayurveda/Treatments';
import Contact from './pages/contact/Contact';
import VideosArticles from './pages/ayurveda/VideosArticles';
import VideoArticle from './pages/ayurveda/videoarticlespages/VideoArticle';
import LiverDetoxArticle from './pages/ayurveda/videoarticlespages/LiverDetoxArticle';
import DetoxInfo from './pages/ayurveda/videoarticlespages/DetoxInfo';


function App() {
  return (
    // No <BrowserRouter> here! It's already in main.jsx
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} /> 
        {/* <Route path='about' element={<About/>} />
        <Route path="about/ourstory" element={<OurStory />} />
        <Route path="about/ourprogram" element={<OurProgram />} />
         <Route path="about/ourteam" element={<OurTeam />} />
         <Route path="about/otherservices" element={<OtherServices />} />
         <Route path="about/ourtreatments" element={<OurTreatments />} />
          <Route path="about/stay" element={<Stay />} /> */}

          {/* Ayurveda */}

           {/* <Route path='ayurveda' element={<Ayurveda/>} />
           <Route path="ayurveda/ayurveda" element={<AyurvedaSection />} />
            <Route path="ayurveda/panchakarma" element={<Panchakarma />}/>
            <Route path="ayurveda/treatments" element={<Treatments />}/>
             <Route path="ayurveda/videoarticle" element={<VideosArticles />}/>
              <Route path="ayurveda/video" element={<VideoArticle />}/>
              <Route path="ayurveda/liver" element={<LiverDetoxArticle />}/>
              <Route path="ayurveda/detox" element={<DetoxInfo />}/> */}


             {/* <Route path="contact" element={<Contact />}/> */}
         {/* <Route path="*" element={<div>Page Not Found</div>} />  */}
      </Route>
    </Routes>
  );
}

export default App;