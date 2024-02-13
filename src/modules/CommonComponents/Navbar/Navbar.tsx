import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Drawer from '@/modules/CommonComponents/Drawer/Drawer';
import { useNavigate } from 'react-router-dom';
import { useDrawer } from '@/hooks/useDrawer';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { showDrawer, setShowDrawer } = useDrawer();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className='bg-theme-50 shadow dark:bg-gray-800 box-border w-full h-[72px] shadow-default fixed top-0 left-0 z-20'>
      <Drawer show={showDrawer} onClose={() => setShowDrawer(false)} />
      <div
        className='
              container
              py-3
              mx-auto
              md:flex md:justify-between md:items-center
              '
      >
        <div className='flex items-center justify-between'>
          <div onClick={() => navigate('/')}>
            <a
              className='
                  text-xl
                  font-bold
                  text-gray-800
                  dark:text-white
                  md:text-2xl
                  hover:text-gray-700
                  dark:hover:text-gray-300
                  '
              href='#'
            >
              Brand
            </a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:mx-6'>
          <div className='relative flex justify-center items-center'>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                navigate(`.?search=${searchQuery}`);
              }}
              className='relative flex justify-center items-center'
            >
              <input
                type='text'
                className='bg-theme-50 border w-80 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none'
                placeholder='Search products...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type='submit'
                className='absolute right-0  mr-2 self-center'
              >
                <svg
                  className='h-4 w-4 fill-current my-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 56.966 56.966'
                >
                  <path d='M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c5.429 0 10.642-1.909 14.786-5.396l13.557 14.101c.571.593 1.339.92 2.162.92s1.591-.327 2.162-.92c1.175-1.177 1.175-3.08 0-4.257zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z' />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className='items-center md:flex'>
          <div className='flex flex-col md:flex-row md:mx-6'>
            <a
              onClick={() => navigate('/')}
              className='
                  my-1
                  text-gray-700
                  dark:text-gray-200
                  hover:text-indigo-500
                  dark:hover:text-indigo-400
                  md:mx-4 md:my-0
                  '
              href='#'
            >
              Home
            </a>
            <a
              onClick={() => navigate('/shop')}
              className='
                  my-1
                  text-gray-700
                  dark:text-gray-200
                  hover:text-indigo-500
                  dark:hover:text-indigo-400
                  md:mx-4 md:my-0
                  '
              href='#'
            >
              Shop
            </a>
            <a
              className='
                  my-1
                  text-gray-700
                  dark:text-gray-200
                  hover:text-indigo-500
                  dark:hover:text-indigo-400
                  md:mx-4 md:my-0
                  '
              href='#'
            >
              Contact
            </a>
            <a
              className='
                  my-1
                  text-gray-700
                  dark:text-gray-200
                  hover:text-indigo-500
                  dark:hover:text-indigo-400
                  md:mx-4 md:my-0
                  '
              href='#'
            >
              About
            </a>
          </div>

          <div className='flex justify-center md:block'>
            <a
              className='
                  relative
                  text-gray-700
                  dark:text-gray-200
                  hover:text-gray-600
                  dark:hover:text-gray-300
                  '
              href='#'
            >
              <ShoppingCartIcon
                className='w-6 h-6'
                onClick={() => setShowDrawer(true)}
              />

              <span
                className='
                       absolute
                       top-0
                       left-0
                       p-1
                       text-xs text-white
                       bg-indigo-500
                       rounded-full
                       '
              ></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
