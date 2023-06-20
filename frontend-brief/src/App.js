import React  from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBare from './components/SideBare';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css'; 
import Promotion from './pages/Promotion';
import Aprrenants from './pages/Aprrenants'
import Brief from './pages/brief';
import Detail_Brief from './pages/Détail_Brief';
import TachesBrief from './pages/TachesBrief';
import Consulter from './pages/Consulter';

const App = () => {


  return (
    <div>
        <NavBar />  
        <div className='flex'>
            <BrowserRouter>
                <div>
                
                <SideBare />
                </div>
                <div>
                    
                        <Routes>
                            <Route path='/' element={<Home />}/>
                            <Route path='/Home' element={<Home />}/>
                            <Route path='/Promotion' element={<Promotion />}/>
                            <Route path='/Aprrenants' element={<Aprrenants />}/>
                            <Route path='/Brief' element={<Brief />}/>
                            <Route path='/Détail_Brief/:id' element={<Detail_Brief />}/>
                            <Route path='/Tasks/:id' element= {<TachesBrief />}/>
                            <Route path="/Consulter/:id" element={<Consulter />} />
                            {/* <Route path='/Brief/:id/Tasks' element= {<TachesBrief />}/> */}
                        </Routes>
                    
                </div>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default App