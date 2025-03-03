import './styles/style.css'
import './styles/sadnavbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

    const Navbar: React.FC = () => {
        return (
            <div id='navbar'>
                <div id='filler'></div>
                <div className='link' id='#homepage-link' ><Link to="/">home</Link></div>
                <div className='link' id='volunteer'><Link to="/volenterpage">Volenter!!</Link></div>
            </div> 
        )
    }
    export default Navbar;
    