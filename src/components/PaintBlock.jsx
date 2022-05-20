import React from 'react'
import {Link } from 'react-router-dom';

function PaintBlock({paintName, price, autorName, imgUrl, id}) {
  return (
    <div className='paint'>
      <Link  to={`/paint/${id}`}>
        <img src={imgUrl} alt='img'/>  
        <div className='paint_discr'>
          <h3>{paintName}</h3>
          <h4>Автор: {autorName} | цена: {price}$</h4>
        </div>
      </Link>
  </div>
  )
}

export default PaintBlock