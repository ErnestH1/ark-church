//Don't touch this code if you you don't know what it does
import { useState } from 'react';
import Logo from '../../assets/logo/logo-07.png'
import NavLinks from './NavLinks';

function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <nav className='flex justify-between'>
            <a href='/'>
                <img src={Logo} className="h-16 cursor-pointer " alt="Ark youth Church logo" />
            </a>
            {/* Here are the nav links */}
            <ul className='md:flex hidden items-center gap-4 mx-3'>
                <NavLinks />
            </ul>

            {/* Mobile navigation Start */}
            <ul className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500 ${open ? ' right-0' : 'right-[-100%]'}`}>
                <NavLinks />
            </ul>
            {/* Mobile navigation End */}
            <div className='text-2xl md:hidden z-50 my-4' onClick={() => setOpen(!open)}>
                <ion-icon name="menu" className="h-4 w-4"></ion-icon>
            </div>
        </nav>
    )
}
export default Navbar

//Don't touch this code if you, you don't know what it does
