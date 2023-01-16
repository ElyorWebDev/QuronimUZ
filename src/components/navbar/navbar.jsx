import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss";


const navbar = () => {
  return (
 
      <div className='navbar'>
        <div className="navbar__logo">
          <Link to={"/"}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIE9LHbAfdqj-Pqtd5gGwTqikTmr_j4X_xw&usqp=CAU" alt="" />
          </Link>

          
        </div>
        <div className="navbar__link">
          <ul>
            <li>
              <Link className='navli' to={"suralar"}>Quron</Link>
            </li>
            <li>
             <Link className='navli' to={"namoztime"}> Namoz vaqtlari</Link>
             
            </li>
          </ul>
        </div>
   



    </div>
  )
}

export default navbar
