import React from 'react';
import { Link, NavLink } from 'react-router';




const Header = () => {
    return (
        <div>
            <h3>It is a nsvbar </h3>

            <nav className='flex justify-center items-center '>
                <NavLink className='mr-5' to={'/'}>Home</NavLink>
                <NavLink className='mr-5' to={'/mobiles'}>Mobiles</NavLink>
                <NavLink className='mr-10' to={'/laptops'}>Laptops</NavLink>
                <NavLink className='mr-10'  to={'/users'}>Users</NavLink>
                <NavLink  to={'/users2'}>Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;