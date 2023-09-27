import React from 'react'
import Base from '../../base/base'
import Nav from '../../head/nav'
import Footer from '../../foot/footer'
import Aboutus from './aboutus'


export default function About() {
  return (
    <div>
      <Nav/>

      <Base
        cName='base-mid'
        baseImg='https://images.unsplash.com/photo-1642933591836-5163899d6834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
        title='About'
      />

      <Aboutus/>

      <Footer/>
      
    </div>
  )
}
