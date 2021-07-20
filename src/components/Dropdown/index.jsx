import React, { useState } from 'react'
import ListOfLinks from '../ListOfLinks';
import './styles.css'; 

const REGIONES = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const index = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='dropdown'>
      <div className="dropdown__title" onClick={()=> setToggle(prev=> !prev)}>
        <span>Filter by region</span>
        <i className="fas fa-angle-down"></i>
      </div>
      <ListOfLinks list={REGIONES} toggleVisibility={{ display: toggle ? 'inherit' : 'none' }} />
    </div>
  );
}

export default React.memo(index)
