import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.css';
import logo from '../../assets/logos/iSkull-logo.png';

class Header extends React.Component{
    render()
    {
        return (
            <div className="header">
                    <Link to="/" className="logo">
                        <img src = {logo} alt="logo"/>
                    </Link>
                
                <div className="options">
                    <Link className="option" to="/shop">SHOP</Link>
                    <Link className="option" to="/shop">CONTACT</Link>

                </div>
            </div>
        );
    }
}
export default Header;