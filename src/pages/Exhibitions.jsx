import React from 'react';
import '../css/Exhibitions.css';

import Categories from '../components/Categories';
import CurrentExh from '../components/CurrentExh';
import PlannedExh from '../components/PlannedExh';
import ArchiveExh from '../components/ArchiveExh';
import { useState } from 'react';


function Exhibitions() {

    const [index, setIndex] = useState(0);

    const pull_data = (data) => {
        console.log(data); 
        setIndex(data);
      }

    return(
        <div>
            <div className='exh_title'>
                <h3>Виртуальные туры</h3>
            </div>
            <div className='exh_content'>
                <Categories func={pull_data} onClick={(index) => console.log(index)} items ={['Дейстующие', 'Запланированные', 'Архив']} />
                {index === 0 && <CurrentExh  />}
                {index === 1 && <PlannedExh />}
                {index === 2 && <ArchiveExh/>}
            
              
            </div>
        </div>
       
    
    );
}

export default Exhibitions;