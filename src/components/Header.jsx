import React from 'react';
import '../css/Header.css';
import card from '../img/card.png'
import profile from '../img/profile.png'
import {Link } from 'react-router-dom'

function Header() {
    return( 
        <div className="header">
            <Link className='link' to='/'>
                <div className="logo"><h3>ArtSpace</h3> </div>
            </Link>
        <nav className="menu_items">
            <ul  >
                <Link to='/'><li>Художники</li></Link> 
                <Link to='/paints'><li>Картины</li></Link>
                <Link to='/'><li>Коллекции</li></Link>
                <Link to='/exh'><li>Виртуальные туры</li></Link>
                <Link to='/'> <li>О нас</li></Link>
            </ul>
            <img src={card} alt='card'/>
            <img src={ profile} alt='card'/>
        </nav>
   
    </div>
    );
}

export default Header;