import React from 'react'
import exh1 from '../img/exh1.jpg'
import '../css/Exh.css';

function PlannedExh() {
  return (
    <div className='exh_categories_results'>
       
                <div className='exh'>
                    <div className="exh_img">
                        <img src={exh1} alt='ex'/>
                    </div>
                    <div className="exh_discr">
                        <h4>Иллюзия</h4>
                        <h5>София Киседу</h5>
                        <p>Дата: 12.06.2022 - 24.06.2022</p>
                        <p>Комнатат №3</p>
                        <p>Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки,</p>
                        <button className="exh_button ">В избранное</button>
                    </div>
                </div>
                <div className='exh'>
                    <div className="exh_img">
                        <img src={exh1} alt='ex'/>
                    </div>
                    <div className="exh_discr">
                        <h4>Иллюзия</h4>
                        <h5>София Киседу</h5>
                        <p>Дата: 15.06.2022 - 29.06.2022</p>
                        <p>Комнатат №3</p>
                        <p>Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки,</p>
                        <button className="exh_button ">В избранное</button>
                    </div>
                 </div>
        
                
    </div>
  )
}

export default PlannedExh