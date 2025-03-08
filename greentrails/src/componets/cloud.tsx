import '../styles/style.css'
import '../styles/navbar.css'
import React from 'react';
import cloudImage from "./pictures/cloud.png";



    const Cloud: React.FC = () => {
        return (
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src={cloudImage} alt="please" id='cloud' style={{ display: 'block' }} />
                <p style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'black', 
                    margin: 0 
                }}>test</p>
            </div>
        )
    }
    export default Cloud;