import './menu.css';
import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
                <div className="menu">
                    <div className="menu_inner">
                        <ul>
                            <li className="main_inner"><Link to="/">MAIN</Link></li>
                            <li><Link to="/mypage">마이페이지</Link></li>
                            <li><Link to="/input">플래너 제작</Link></li>
                            <li><Link to="/community">공유 게시판</Link></li>
                        </ul>            
                    </div>
                </div>
        );
    }
}

export default Menu;