import React from 'react'
import '../css/Header.css';
import {Link } from 'react-router-dom'
const footerItems = ["О проекте", "Контакты","Конфиденциальность","Для художников", "Для покупателей"]

function Footer() {
  return (
    <div className='footer header'>
         <Link className='link' to='/'>
                <div className="logo"><h3>ArtSpace</h3> </div>
        </Link>
        <nav className="menu_items">
            <ul  >
                {footerItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </nav>
    </div>
  )
}

export default Footer