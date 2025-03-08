import './styles/style.css';
import React from 'react';
import Homepage from './homepage/homepage';
import Volenterpage from './volenteerpage/volenterpage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
            <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/volenterpage" element={<Volenterpage />} />
            </Routes>
            </Router>
        </div>
    );
};

export default App;

