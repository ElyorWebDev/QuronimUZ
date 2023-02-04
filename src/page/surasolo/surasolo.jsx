import React, { useEffect, useState } from 'react'
import "./surasolo.scss"
import Oyat from '../../components/ayats/ayats'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../components/loader/loader'
const Surasolo = () => {
  const { id } = useParams()

  const [surasolo, setSurasolo] = useState([]);
  const [surauzb, setSurauzb] = useState([])
  useEffect(() => {
 
    axios
      .get(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
      .then(res => {
        setSurasolo([...res.data.data.ayahs])
        })
    axios
      .get(`https://api.alquran.cloud/v1/surah/${id}/uz.sodik`)
      .then(res => {
        setSurauzb([...res.data.data.ayahs])
      })


  },[null])



  return (
    <>
      {
        surasolo?.length!=0 && surauzb?.length!=0 && (
          <div className='surasolo'>
            {
              surasolo.map((item, index) =>  <Oyat key={item.number} num={item.number} audio={item.audio} text={item.text}  uzb={surauzb[index].text} />
              )



            }


          </div>)
      }

    </>

  )
}

export default Surasolo
