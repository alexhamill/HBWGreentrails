import '../styles/style.css'
import '../styles/sadnavbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

    const Navbar: React.FC = () => {
        return (
            <div id='navbar'>
                {/* <div id='filler'></div> */}
                <div className='link' id='homepage' ><Link className="a" to="/HBWGreentrails/">home</Link></div>
                <div className='link' id='volunteer'><Link className="a"to="/volenterpage/">Volenter!!</Link></div>
                <div className='link' id='leaderboard'><Link className="a"to="/leaderboard/">Leaderboard</Link></div>
                <div className='link' id='Signup'><Link className="a"to="/signup/">Signup</Link></div>
            </div> 
        )
    }
    export default Navbar;
    