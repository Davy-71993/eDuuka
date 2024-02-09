"use client"

import { useState, useEffect, Suspense } from 'react';
import SearchBar from '../parts/SearchBar';
import { usePathname } from 'next/navigation';


const SearchBarWrapper = () => {
    const pathName = usePathname()
    const [showSearchBar, setShowSearchBar] = useState<boolean>(()=>pathName !== '/')
    useEffect(()=>{
        setShowSearchBar(pathName !== '/')
    }, [pathName])
  return (
    <>
    { showSearchBar ? (
      <Suspense>
        <SearchBar />
      </Suspense>
    )
    :
    null
    }
    </>
  );
};

export default SearchBarWrapper;
