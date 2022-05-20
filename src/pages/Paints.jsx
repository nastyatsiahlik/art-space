import React from 'react'
import '../css/Paints.css';


import PaintBlock from '../components/PaintBlock';

function Paints({items}) {
  return (
    <div>
      <div className='paints_menu'>
        
        <div className='filter'>
          <ul>
            <li>Размер</li>
            <li>Жанр</li>
            <li>Цена</li>
            <li>Автор</li>
          </ul>
        </div>
      </div>
      <div className='paints-content'>
        {
          items.map((obj) => (
            <PaintBlock key={obj.id}  {...obj} />   
          ))
        }
      </div>
    </div>
  )
}

export default Paints