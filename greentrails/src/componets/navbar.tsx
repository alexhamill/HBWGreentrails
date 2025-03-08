import '../styles/style.css'
import '../styles/navbar.css'
import React from 'react';
import Cloud from './cloud';

    const Navbar: React.FC = () => {
        return (
            <div id='navbar'>
                <div className='link' id='volunteer'><a href=''>volunteer!</a></div>
                <div id='' ><Cloud /></div>
            </div>
        )
    }
    export default Navbar;

