import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { RiMovie2AiFill } from "react-icons/ri"

import './header.scss'

const Header = () => {
    const activeStyle={color:'#6b8e23' }
    return (
        <div className='header'>
            <h1 className="logo"><Link to="/"><RiMovie2AiFill /></Link></h1>
            <div id="nav">
                <nav>
                    <ul>
                        <li><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/">Home</NavLink></li>
                        <li><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/drama">Drama</NavLink></li>
                        <li><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/comedy">Comedy</NavLink></li>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/Romance">Romance</NavLink></li>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/Action">Action</NavLink></li>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/Horror">Horror</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;