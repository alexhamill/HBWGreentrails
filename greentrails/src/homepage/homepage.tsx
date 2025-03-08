import '../styles/style.css'
import React from 'react';
import Top from '../componets/header';
import Treefooter from '../componets/footer';
import Navbar from'../componets/sadnavbar';
import Content from '../componets/content';

    const Homepage: React.FC = () => {
        return (
            <div className="App-header">
                <Navbar />
                <Top message="HBW Green Trails" />
                <Treefooter />
            </div>
        )
    }
    
    export default Homepage;