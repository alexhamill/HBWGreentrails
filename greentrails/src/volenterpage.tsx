import './styles/style.css'
import React from 'react';
import Navbar from'./sadnavbar';
import { Regfooter } from './footer';
import Road from './road';
import Content from './content';
import Header from './header';

    const Volenterpage: React.FC = () => {
        return (
            <div className="App-header">
                <Navbar />
                <h1>Upcoming volunteer opportunities</h1>
                
                <Regfooter />
            </div>
        )
    }
    
    export default Volenterpage;