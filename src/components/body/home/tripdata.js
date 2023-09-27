import React from 'react'

export default function Tripdata(props)
{
    const{image,heading,text}=props;
  return (
    <div className='tripdata'>

        <div className='card-image'>
           
            <img src={image} alt='img'/>
           
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>

    </div>
  )
}
