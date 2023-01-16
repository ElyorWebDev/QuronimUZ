import React from 'react'
import "./home.scss"
import { Link } from 'react-router-dom';
const home = () => {
  return (
    <div className='Home'>
       <div className='Home__img'>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shahadah-1.svg/1200px-Shahadah-1.svg.png" alt="" />
       </div>
       <div className="Home__link">
            <Link className='Link' to={"suralar"}>Quron</Link>
            <Link className='Link' to={"namoztime"}> Namoz vaqtlari</Link>
       </div>
    
    </div>
  )
}

export default home

