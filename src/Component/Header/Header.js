/* Import Packages */
import React, { useState } from 'react';
import Fade from 'react-bootstrap/Fade'
import { useHistory } from 'react-router-dom';

/* Import CSS*/
import './Header.css';

/* Import Images */
import Logo from '../../assets/images/Logo.png'
import g_user from '../../assets/images/g-user.png'

const Header = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const signout = () => {
        console.log('sign out')
        localStorage.clear();
        history.push(`/`)
    }

    const Username = localStorage.getItem('Username');

    return (
        <div>
            <div id="header" className="d-flex justify-content-between">
                <img id="logo" className="float-start" src={Logo} alt="Logo" />
                <div className="p-0 user_btn align-self-center mx-3" onClick={() => setOpen(!open)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}>
                    <img id="user" className="bg-white p-1" src={g_user} alt="User" />
                </div>
            </div>
            <Fade in={open} id="profile" className="position-absolute text-center">
                <ul className="p-0 m-0" id="example-fade-text">
                    <li>Hi,<span id="username">{Username}</span></li>
                    <li id="signout_btn" onClick={signout}>登出</li>
                </ul>
            </Fade>
        </div>
    );
}

export default Header;