import React from 'react'
import '../css/Paint.css';

import heart from '../img/heart.png'
import share from '../img/share.png'


import { useParams } from 'react-router-dom';



function Paint({items}) {

    const { id } = useParams();
     const n = id;

return (
   <div className='paint_container'>
        <div className='paint_info'>
            <div className='left_paint_info'>
                <p>Название: </p>
                <p>Автор: </p>
            </div>
            <div  className='right_paint_info'>
                <p className='inf_name'> {items[n].paintName} </p>
                <p className='inf_autor'>{items[n].autorName} </p>
            </div>
        </div>
        <div className='paint_img'>
            <img src={`../img/p${id}.png`} alt="paint"/>
        </div>
        <div className='pain_options'>
            <div className='left_paint_options'>
            <div className='heart'>
                <div>
                     <img src={heart} alt="like"/>
                </div>
                <div>
                    <p>В коллекцию</p>
                </div>
            </div>
            <div className='heart'>
                <div>
                     <img src={share} alt="like"/>
                </div>
                <div>
                    <p>Поделиться</p>
                </div>
            </div>
            </div>
            <div className='right_paint_options'>
                <div className='paint_price'>
                   <p>{items[n].price} </p> 
                   </div>
                    <div className='to_cart'>
                        <button className='to_cart_button'>В корзину</button>
                </div>
            </div>

        </div>
        <div className='paintsOfAutor'>
            <h3>Работы этого автора</h3>

        </div>
        <div className='otherPaints'>
            <h3>Похожие</h3>

        </div>
    </div>

  )
  
}

export default Paint