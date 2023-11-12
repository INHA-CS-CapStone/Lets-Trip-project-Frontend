import './header.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="menu">
                <div className="logo"><Link to="/">Let's Trip!</Link></div>
                <div className="menu_inner">
                    <ul>
                        <li><Link to="/type">플래너 제작</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;