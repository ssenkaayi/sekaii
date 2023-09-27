import React from 'react'
import Base from '../../base/base'
import Nav from '../../head/nav'
import Destination from './destination'
import Trip from './trip'
import Footer from '../../foot/footer'
export default function Home() {
  return (
    <div>
      <Nav/>
     
      <Base
      cName='base'
      baseImg='https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      title='Your Journey Your Story'
      text='Choose Your Favourite Destination.'
      buttonText='Travel Plan'
      url='/'
      btnclass='show'
      />

      <Destination/>

      <Trip/>
      
      <Footer/>

    </div>
  )
}
