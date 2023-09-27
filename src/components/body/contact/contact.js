import React from 'react'
import Base from '../../base/base'
import Nav from '../../head/nav'
import Footer from '../../foot/footer'
import Contactus from './contactus'

export default function Contact() {
  return (
    
    <div>
      <Nav/>

      <Base
        cName='base-mid'
        baseImg='https://images.unsplash.com/flagged/photo-1579697376885-4a18f92c5cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        title='Contact'
      />

      <Contactus/>

      <Footer/>
    </div>

  )
}
