import React from 'react'
import "./ayats.scss"
const ayats = (props) => {
    return (
        <div className="ayats">
             <div className="ayats__audio">
                  <div className='num'>
                     {props.num}
                  </div>
                  <div className='ayat_audio'>
                     <audio src={props.audio} controls></audio>
                  </div>
             </div>
             <div className="ayats__arab">
                    {props.text}
             </div>
             <div className="ayats__uzb">
                {props.uzb}
             </div>
        </div>
    )
}

export default ayats
