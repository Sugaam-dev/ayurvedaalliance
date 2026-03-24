import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;