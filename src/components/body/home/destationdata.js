import React from 'react'
import './destination.css'

export default function Destationdata(props) {
    const {heading,description,img1,img2,className}=props;
  return (
    <div>

<div className={className}>
            <div className='des-text'>
                <h2>
                    {heading}

                </h2>
                <p>
                    {description}
            
                </p>
            </div>
            <div className='image'>
                {img1}
                {img2}

            </div>
        </div>
    </div>
  )
}
