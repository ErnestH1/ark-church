//Don't touch this code if you you don't know what it does
import { useState } from 'react';
import Logo from '../../assets/logo/logo-07.png'
import NavLinks from './NavLinks';

function Navbar() {

const [open, setOpen] =useState(false)

    return (
        <nav className='flex justify-between'>
            <a href='/'>
                <img src={Logo} className="h-16 cursor-pointer md:h-14" alt="Ark youth Church logo" />
            </a>
            {/* Here are the nav links */}
            <ul className='md:flex hidden items-center gap-4 mx-3'>
                <NavLinks />
            </ul>

            {/* Mobile navigation */}
            <ul className='fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl md:hidden flex flex-col gap-10 text-medium p-7 pt-20 right-0 '>
                <NavLinks />
            </ul>
            {/* Mobile navigation */}
        </nav>
    )
}
export default Navbar

//Don't touch this code if you, you don't know what it does
