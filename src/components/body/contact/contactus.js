import React from 'react'
import './contactus.css'

export default function Contactus() {
  return (
    <div className='contactus'>
        <h1>Send us a Message!</h1>
        
        <form>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <textarea placeholder='Message' rows='4'/>
            <button>Send Message</button>
         
        </form>
    </div>
  )
}
