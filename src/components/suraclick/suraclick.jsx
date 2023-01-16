import React from 'react'
import { Link } from 'react-router-dom'
import "./suraclick.scss"

const suraclick = (props) => {
    return (
        <Link to={`/surasolo/${props.id}`} className='suraclick'>
            <div className="suraclick__number">
                 {props.num}
            </div>
            <div className="suraclick__name">
                <h5>{props.ename}</h5>
                
            </div>
            <div className="suraclick__arab">
                <h5>{props.name}</h5>
            </div>

        </Link>
    )
}

export default suraclick
