import React from 'react'
import './destination.css'
import Destationdata from './destationdata'


export default function Destination() {
  return (
    <div className='destination'>
        <h1>

            Popular Destinations
        </h1>
        <p className='title-des'>
            Tours give you the opportunity 
            to see alot within a small
            time frame.
        </p>

        <Destationdata className='first-des'
        heading='Bujjagali Falls, Jinja'

        description='Sekai safaris is a tours and travel company aiming at 
        serving its customers with prestige, comfort and become 
        the leading service provider in the country. providing 
        quality services to our costumers is our main concern.
        Sekai safaris is a tours and travel company aiming at 
        serving its customers with prestige, comfort and become 
        the leading service provider in the country. providing 
        quality services to our costumers is our main concern.
        comfort and become 
        the leading service provider in the country. providing 
        quality services to our costumers is our main concern.'

        img1={<img alt='img' src='https://images.unsplash.com/photo-1595171250566-ed072c43574b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3
        D&auto=format&fit=crop&w=1471&q=80'/>}

        img2= {<img alt='img' src='https://images.unsplash.com/photo-1610973374471-e667335f1b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3
        D&auto=format&fit=crop&w=1335&q=80'/>}
        />

        <Destationdata className='first-des-reverse'
        heading='Karuma Game Park'

        description='Sekai safaris is a tours and travel company aiming at 
        serving its customers with prestige, comfort and become 
        the leading service provider in the country. providing 
        quality services to our costumers is our main concern.
        Sekai safaris is a tours and travel company aiming at 
        serving its customers with prestige, comfort and become 
        the leading service provider in the country. providing 
        quality services to our costumers is our main concern.
        comfort and become 
        the leading service provider in the country. providing 
        quality services to our costumers is our main concern.'

        img2={<img alt='img' src='https://images.unsplash.com/photo-1624358084630-f0880cb776a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        &auto=format&fit=crop&w=1473&q=80'/>}

        img1= {<img alt='img' src='https://images.unsplash.com/photo-1548442197-ac7a077df845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&a
        uto=format&fit=crop&w=1374&q=80'/>}
        />



      
      
    </div>
  )
}
