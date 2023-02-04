import Home from './page/home/home';
import "./App.css"
import Navbar from "../src/components/navbar/navbar"
import { Route, Routes } from 'react-router-dom';
import Suralar from './page/suralar/suralar';
import Surasolo from './page/surasolo/surasolo';
import Namoztime from './page/namoztime/namoztime';
import { createContext } from "react";
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from './components/loader/loader';

export const Mycontext = createContext([]);
function App() {
  const [suralar, setSuralar] = useState([])
 
  
  useEffect(() => {
    axios("https://api.alquran.cloud/v1/surah")
      .then(res => setSuralar(res.data.data))



  }, [null])
  
  return (
    <Mycontext.Provider value={{ suralar }}>
      {
        suralar.length ? (
          <div className="App">
            <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/suralar' element={<Suralar />} />
                <Route path='/namoztime' element={<Namoztime />} />
                <Route path='/surasolo/:id' element={<Surasolo />} />
              </Routes>
            </div>



          </div>) :
          (
            <Loader />
          )

      }


    </Mycontext.Provider>


  );
}

export default App;
