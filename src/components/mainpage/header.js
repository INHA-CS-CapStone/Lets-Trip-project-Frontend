import './header.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="menu">
                <div className="logo">Let's Trip!</div>
                <div className="menu_inner">
                    <ul class>
                        <li className="main_inner"><Link to="/">MAIN</Link></li>
                        <li><Link to="/mypage">마이페이지</Link></li>
                        <li><Link to="/type">플래너 제작</Link></li>
                        <li><Link to="/community">공유 게시판</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;