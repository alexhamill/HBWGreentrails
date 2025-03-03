import './styles/style.css'
import React from 'react';
import Top from './header';
import Treefooter from './footer';
import Navbar from'./sadnavbar';

    const Homepage: React.FC = () => {
        return (
            <div className="App-header">
                <Navbar />
                <Top />
                <Treefooter />
            </div>
        )
    }
    
    export default Homepage;