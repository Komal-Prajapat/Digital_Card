
/* Last.js */
import React from 'react';
import './last.css';
import logo from '../assets/logo.jpg';

const Last = () => {
  return (
    <div className="lastcontainer mt-9 flex items-center justify-center relative">
      <img src={logo} alt="" className="logo" />
      <h1 className="text-white ml-4 absolute bottom-10">© COPYRIGHT 2018 I-SOFTZONE</h1>
    </div>
  );
};

export default Last;
