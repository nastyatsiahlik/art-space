import React from 'react'
import { useState } from 'react';

function Categories(props) {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
      setActiveItem(index);
      props.func(index) ;
  }

 

  return (
    <div className='exh_categories'>

        {props.items.map((name, index) => (
            
            <div onClick={() => onSelectItem(index)} key={`${name}_${index}`} className={activeItem === index ? 'active_category categories_name' : 'categories_name' }>
                      <p>{name}</p>
             </div>)
             
             )}
    </div>
  )
}

export default Categories