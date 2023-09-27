import React from 'react'
import './trip.css'
import Tripdata from './tripdata'

export default function Trip() {
  return (
    <div className='trip'>
        <h1>
            Recent Trips
        </h1>
        <p>
            You can discover new
             destinations with google maps
        </p>
        <div className='tripcards'>


            <Tripdata
            image='https://images.unsplash.com/photo-1615277716590-d87d101caa70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3
            D%3D&auto=format&fit=crop&w=1470&q=80'
            
            heading='Trip At Source Of The Nile'

            text='Sekai safaris is a tours and travel company aiming at 
            serving its customers with prestige, comfort and become 
            the leading service provider in the country. providing 
            quality services to our costumers is our main concern.
            Sekai safaris is a tours and travel company aiming at 
            serving its customers with prestige, comfort and become 
            the leading service provider in the country. providing 
            quality services to our costumers is our main concern.'
            />

            <Tripdata
            image='https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&aut
            o=format&fit=crop&w=1374&q=80'
            
            heading='Trip In Rwenzori Moutains'

            text='Sekai safaris is a tours and travel company aiming at 
            serving its customers with prestige, comfort and become 
            the leading service provider in the country. providing 
            quality services to our costumers is our main concern.
            Sekai safaris is a tours and travel company aiming at 
            serving its customers with prestige, comfort and become 
            the leading service provider in the country. providing 
            quality services to our costumers is our main concern.'
            />

            <Tripdata
            image='https://images.unsplash.com/photo-1669111960270-62c386d7687a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=
            format&fit=crop&w=1374&q=80'
            
            heading='Trip At Kazinga Channel'

            text='Sekai safaris is a tours and travel company aiming at 
            serving its customers with prestige, comfort and become 
            the leading service provider in the country. providing 
            quality services to our costumers is our main concern.
            Sekai safaris is a tours and travel company aiming at 
            serving its customers with prestige, comfort and become 
            the leading service provider in the country. providing 
            quality services to our costumers is our main concern.'
            />


        </div>

    </div>
  )
}
