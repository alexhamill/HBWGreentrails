import '../styles/style.css';
import React from 'react';

type Props = {
  message: string;
};

const Top: React.FC<Props> = ({ message }) => {
  return (
    <header className="App-header">
      <h1 id="GreenTrails">{message}</h1>
    </header>
  );
};

export default Top;
