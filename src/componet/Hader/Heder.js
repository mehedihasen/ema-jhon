import React from 'react';
import logo from '../../images/logo.png';
import './hed.css';


const Heder = () => {
    return (
        <div className="heder">
          <div className='icon'>
          <img src={logo}alt=""/>
          </div>
          <div className="nav">
          <a href="">shope</a>
            <a href="">coder</a>
            <a href="">maneg</a>
            </div>
        
        </div>
    );
};

export default Heder;