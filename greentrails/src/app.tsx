import './styles/style.css';
import React from 'react';
import Homepage from './homepage/homepage';
import Volenterpage from './volenteerpage/volenterpage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Adddatapage from './adddata/adddatapage';


const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
            <Routes>
            <Route path="/hbwgreentrails/*" element={<Homepage />} />
            <Route path="/HBWGreentrails/*" element={<Homepage />} />
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="/volenterpage" element={<Volenterpage />} />
            <Route path='/adddata' element={<Adddatapage />} />
            </Routes>
            </Router>
        </div>
    );
};

export default App;

