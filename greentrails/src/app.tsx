import './style.css';
import React from 'react';
import Top from './header';
import Treefooter from './footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Top />
            <Treefooter />
        </div>
    );
};

export default App;

