import React from 'react';
import './Header'
import logo from '../../assets/logobe.png'
import './Header.css'

const Header: React.FC = () => {
    return (
        <header>
            <div className='header'> 
                <img src={logo} alt="logotipo BeMobile" />
                 ‎ ‎ ‎  
                 </div>
        </header>
    );
};  

export default Header;