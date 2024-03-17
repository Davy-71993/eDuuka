import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type Props = {
    className?: string
}

const NavLinks = ({ className}: Props) => {
  return (
    <div className={clsx("w-full", className)}>
        <Link href="/view" className='line-clamp-1' >Buy</Link>
        <Link href="/map" className='line-clamp-1' >Map</Link>
        <Link href="/ads" className='line-clamp-1' >Ads</Link>
        <Link href="/help" className='line-clamp-1' >Help</Link>
    </div>
  );
};

export default NavLinks;
