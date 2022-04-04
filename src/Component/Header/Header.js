import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
           
            <nav className='text-3xl  p-10  bg-purple-500'>

                <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </nav>



        </div>
    );
};

export default Header;