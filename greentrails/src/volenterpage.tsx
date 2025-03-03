import './styles/style.css'
import React from 'react';
import Navbar from'./sadnavbar';
import { Regfooter } from './footer';

    const Volenterpage: React.FC = () => {
        return (
            <div className="App-header">
                <Navbar />
                <Regfooter />
            </div>
        )
    }
    
    export default Volenterpage;