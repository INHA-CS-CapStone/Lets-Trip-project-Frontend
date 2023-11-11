import './menu.css';
import React from 'react';
import {Link} from "react-router-dom";

function Menu() {
    return (
        <div className="menu">
            <div className="menu_inner">
                <ul>
                    <li className="main_inner"><Link to="/">LET'S TRIP</Link></li>
                    <li><Link to="/type">플래너 제작</Link></li>
                </ul>            
            </div>
        </div>
    );
}

export default Menu;