import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type Props = {
    className?: string
}

const NavLinks = ({ className}: Props) => {
  return (
    <div className={clsx("w-full", className)}>
        <Link href="/market" className='line-clamp-1' >Market</Link>
        <Link href="/view" className='line-clamp-1' >Get Started</Link>
        <Link href="/map" className='line-clamp-1' >Map</Link>
    </div>
  );
};

export default NavLinks;
