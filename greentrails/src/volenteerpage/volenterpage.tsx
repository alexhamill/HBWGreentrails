import '../styles/style.css'
import React from 'react';
import Navbar from'../componets/sadnavbar';
import { Regfooter } from '../componets/footer';
import Road from '../componets/road';
import Content from '../componets/content';
import Top from '../componets/header';
import Volbox from './volbox';

    const Volenterpage: React.FC = () => {
        return (
            <div id='page'>
                <Navbar />
                <Top message="Upcoming Volunteer Opportunities" />
                <Volbox />
                <Regfooter />
                <Road />
            </div>
        )
    }
    
    export default Volenterpage;