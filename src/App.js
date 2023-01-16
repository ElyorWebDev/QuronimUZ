import Home from './page/home/home';
import "./App.css"
import Navbar from "../src/components/navbar/navbar"
import { Route, Routes } from 'react-router-dom';
import Suralar from './page/suralar/suralar';
import Surasolo from './page/surasolo/surasolo';
import Namoztime from './page/namoztime/namoztime';
function App() {
  return (

    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/suralar' element={<Suralar />} />
          <Route path='/namoztime' element={<Namoztime />} />
          <Route path='/surasolo/:id' element={<Surasolo/>} />
        </Routes>
      </div>



    </div>
  );
}

export default App;
