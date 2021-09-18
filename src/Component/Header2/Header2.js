/* Import Packages */
import React, { Component } from 'react';

/* Import CSS*/
import './Header.css';

/* Import Images */
import Logo from '../../assets/images/Logo.png'

class Header2 extends Component {
    render() {
        
        return (
            <div id="header" className="d-flex justify-content-center">
                <img id="logo" src={Logo} alt="Logo" />
                
            </div>
        );
    }
}

export default Header2;