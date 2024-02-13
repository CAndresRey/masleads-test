import React from 'react';
import Navbar from '../../CommonComponents/Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-1 bg-gradient-to-b from-theme-50 to-theme-300 space-y-4 space-x-5'>
        {children}
      </main>
      
      <footer className='bg-theme-500 text-white px-6 py-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full md:w-auto mb-4 md:mb-0 text-center md:text-left'>
            <h1 className='text-3xl text-theme-50 font-bold'>Your Company</h1>
            <p className='mt-2'>
              All rights reserved &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className='flex items-center mt-4 md:mt-0'>
            <a href='#' className='text-white text-lg mx-2 hover:underline'>
              Terms of Service
            </a>
            <a href='#' className='text-white text-lg mx-2 hover:underline'>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
