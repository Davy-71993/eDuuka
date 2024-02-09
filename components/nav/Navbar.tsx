import React from 'react';
import AuthButton from './AuthButton';
import Logo from './Logo';
import Link from 'next/link';
import Container from '../Container';
import SearchBarWrapper from './SearchBarWrapper';
import MobileNav  from './MobileNav';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="w-full shadow-md fixed top-0 right-0 z-50 bg-blue-700 text-btn-background">
      <Container>
        <div className="w-full flex gap-5 flex-row-reverse md:flex-row justify-between items-center py-3 text-sm">
          <Link href="/" className='bg-btn-background px-3 py-1 rounded-md hover:bg-btn-background-hover'>
            <Logo/>
          </Link>
          <NavLinks className='hidden md:flex gap-5' />
          <SearchBarWrapper />
          <div className="w-full hidden lg:flex justify-end gap-1 ml-5">
            <AuthButton />
            <Link href="/" className="hidden sm:block py-1 h-fit font-bold text-lg text-center text-blue-700 ml-5 px-3 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
              SELL
            </Link>
          </div>
          <MobileNav />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
