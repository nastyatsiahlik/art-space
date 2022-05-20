import React from 'react'
import '../css/Exh.css';
import exh1 from '../img/exh1.jpg'

function ArchiveExh() {
  return (
    <div className='exh_categories_results'>
        <h4>Комната №1</h4>
                <div className='exh'>
                    <div className="exh_img">
                        <img src={exh1} alt='ex'/>
                    </div>
                    <div className="exh_discr">
                        <h4>Иллюзия</h4>
                        <h5>София Киседу</h5>
                        <p>Комнатат №3</p>
                        <p>Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки,</p>
                        <button className="exh_button ">Посетить виртуально</button>
                    </div>
                </div>
                <div className='exh'>
                    <div className="exh_img">
                        <img src={exh1} alt='ex'/>
                    </div>
                    <div className="exh_discr">
                        <h4>Иллюзия</h4>
                        <h5>София Киседу</h5>
                        <p>Комнатат №3</p>
                        <p>Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки,</p>
                        <button className="exh_button ">Посетить виртуально</button>
                    </div>
                 </div>
        
                
    </div>
  )
}

export default ArchiveExh