import React from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='container mx-auto'>
       <NavBar></NavBar>
        <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default Root;