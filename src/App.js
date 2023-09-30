import React from 'react';
import './App.css'
import { Routes , Route} from 'react-router-dom';
import Nav from './components/head/nav';
import Home from './components/body/home/home';
import About from './components/body/about/about';
import Service from './components/body/service/service';
import Contact from './components/body/contact/contact';


const App = ()=>{

  return (
    <div>

    
        <Nav/>
        <Routes>
          {/* <Route index element={<Home/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
  
   
    </div>
  );


}

export default App;
