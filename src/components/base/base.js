import React from 'react'
import './base.css'

export default function Base(props) {
    const{baseImg,cName,title,text,url,btnclass,buttonText} = props;
  return (
    

        <div className={cName}>

            <img  src={baseImg} alt='chalz'/>

            <div className='base-text'>
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={url} className={btnclass}> {buttonText}</a>
            </div>

        </div>

            
        
    



  )
}
