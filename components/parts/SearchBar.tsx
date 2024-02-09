"use client"

import clsx from 'clsx';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC,  useState } from 'react';

interface Props {
    
    className?: string,
    target?: string
}

const SearchBar: FC<Props> = ({ className, target }) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const nonSearchUrls = ['/', '/login', '/signup', '/auth/verify-email', '/auth/reset-password', '/auth/change-password']
    const initialQS = searchParams.get('q') || ''
    const [searchText, setSearchText] = useState<string>(initialQS)

    const nextUrl = nonSearchUrls.includes(pathName) ? '/search' : ''

    const prepareSearchParams = () =>{
        let qs = ''
        searchParams.forEach((value, key)=>{
            if(key !== 'q') {
                qs+=`&${key}=${value}`
            }
        })
        if(!searchText || searchText.length === 0){
            return ''
        }
        return `?q=${searchText.replace(/ /g, '+')}${qs.length > 0 ? qs : ''}`
    }
  
  return (
    <div className={clsx("w-full flex max-w-md text-blue-700 bg-background rounded-xl px-4 gap-2 py-1", className)}>
        <input type="text" value={searchText} placeholder={`Search items ${target ? 'in '+target : ''}`} onChange={e=>setSearchText(e.target.value)} className="w-full px-2 outline-none bg-background" />
        <Link href={ nextUrl + prepareSearchParams() }><Search size={26} className="hover:scale-110 transition-all text-blue-700 cursor-pointer"/></Link>
    </div>
  );
};

export default SearchBar;
