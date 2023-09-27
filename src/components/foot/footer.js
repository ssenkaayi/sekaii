import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>

        
        <div className='top'>

            <div className='logo'>
               <h1>Sekai</h1>
               <p>choose your destination</p> 

            </div>
            <div className='media-icon'>

                <a href='/'>

                    <i className='fa-brands fa-facebook-square'/>
                    <i className='fa-brands fa-whatsapp-square'/>
                    <i className='fa-brands fa-instagram-square'/>
                    <i className='fa-brands fa-twitter-square'/>

                </a>

            </div>

        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All versions</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All versions</a>
            </div>

            <div>
                <h4>Help</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All versions</a>
            </div>

            <div>
                <h4>Others</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All versions</a>
            </div>

        </div>
    </div>
  )
}
