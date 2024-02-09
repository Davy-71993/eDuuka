'use client'

import { AlignJustify, X } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import FadingLine from '../parts/FadingLine'
import { usePathname } from 'next/navigation'

type Props = {}

export default function MobileNav({}: Props) {

    const pathName = usePathname()

    const [show, setShow] = useState(false)

    useEffect(()=>{
        setShow(false)
    }, [pathName])

  return (
    <div className='flex lg:hidden'>
        <Button variant={'outline'}
            onClick={ ()=>{ setShow(!show) }}
            className='px-3 open py-0.5 bg-blue-700 text-btn-background border-2 h-fit'>
            <AlignJustify className='font-bold' />
        </Button>
        <div id='sideNav' className={`bg-blue-700 border z-10 h-screen overflow-y-auto w-full max-w-md transition-all ${show ? 'absolute' : 'hidden'} top-0 left-0 md:left-auto md:right-0`}>
            <div className="border-b px-3 py-2 flex justify-between items-center">
                <Link href="/" className='bg-btn-background md:hidden px-3 py-1 rounded-md hover:bg-btn-background-hover'>
                    <Logo/>
                </Link>
                <Button 
                    variant={'outline'} 
                    className='px-3 py-0.5 bg-blue-700 text-btn-background border-2 h-fit' 
                    onClick={ ()=>{ setShow(false) }}><X /></Button>
            </div>
            <div className="px-3 py-2 flex flex-col space-y-2">
                <NavLinks className='md:hidden' />
                <FadingLine/>
            </div>
        </div>
    </div>
  )
}