import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='px-4 text-white bg-accent'>
      <div className='container flex items-center justify-between py-4 mx-auto'>
        <Link to='/' className='text-2xl font-bold'>
          COVID-Stats India
        </Link>
      </div>
    </header>
  );
};

export default Header;
