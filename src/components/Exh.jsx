import React from 'react';
import exh1 from '../img/exh1.jpg'
import '../css/Exh.css'

function Exh() {

    return (
      <div className='exh'>
                <div className="exh_img">
                    <img src={exh1} alt='ex'/>
                </div>
                <div className="exh_discr">
                    <h4>Иллюзия</h4>
                    <h5>София Киседу</h5>
                    <p>До окончания: 23ч 10мин</p>
                    <p>Комнатат №3</p>
                    <p>Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки, Описание выстаки,</p>
                    <button className="exh_button ">Посетить виртуально </button>
                </div>
        </div>
    );
  }


  export default Exh;