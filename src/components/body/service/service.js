import React from 'react'
import Base from '../../base/base'
import Nav from '../../head/nav'
import Footer from '../../foot/footer'
import Trip from '../home/trip'

export default function Service() {
  return (
    <div>
      <Nav/>

      <Base
        cName='base-mid'
        baseImg='https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80'
        title='Services'
      />

      <Trip/>

      <Footer/>
    </div>
  )
}
