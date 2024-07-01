import React from 'react';
import './Header'
import logo from '../../assets/logobe.png'

const Header: React.FC = () => {
    return (
        <header>
            <div className='header'> 
                <img src={logo} alt="logotipo BeMobile" />
                 ‎ ‎ ‎  
                 </div>
            <h1>Funcionários</h1>
            
        </header>
    );
};  

export default Header;