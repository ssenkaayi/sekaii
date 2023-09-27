import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { menu } from './menu';



export default function Nav() {

    const[state,setState]=useState({clicked:false})
  
    const updateState = ()=>{
  
      setState({clicked:!state.clicked});
  
    }
  

  return (
    <div className='nav-container'>

 
        <h1 className='nav-log'>
            Sekai
        </h1>

        <div className='nav-menu-icons' onClick={updateState}>
           
            <i className={state.clicked?'fas fa-times':'fas fa-bars'}></i>

        </div>

        <ul className={state.clicked? 'nav-menu-item active':'nav-menu-item'}>
            
            {menu.map((item,index)=>{

                return(

                    <li key={index} >

                        <Link className={item.className} to={item.url}>
                    
                            <i className={item.icon}/>
            
                            {item.title}
        
                        </Link>

                    </li>    

                )
            })}

            <button>
                sign up
            </button>

        </ul>
    </div>
  )
}
