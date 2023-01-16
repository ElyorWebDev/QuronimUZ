
import "./suralar.scss"
import Suraclick from '../../components/suraclick/suraclick'
import { useEffect, useState } from "react"
import axios from "axios"


const Suralar = () => {
 
  const [suralar,setSuralar]=useState([])
  useEffect(()=>{
    axios("http://api.alquran.cloud/v1/surah")
      .then(res=>setSuralar(res.data.data))


  },[])

 
  
  return (
    <div className='container'>
        <div className="suralar">
              {
                suralar.map(item=>{
                  return <Suraclick key={item.number} num={item.number} ename={item.englishName} name={item.name} id={item.number}/>
                })
              }
        </div>
      
    </div>
  )
}

export default Suralar
