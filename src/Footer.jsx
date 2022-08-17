import React from 'react'
import { useState } from 'react'
  const today=new Date()
const Footer = ({lenghtitem}) => {


  return (
    <footer className='headerS'>
      <p>{lenghtitem} List {lenghtitem==1?'item':'items'}</p>
    
    </footer>
  )
}

export default Footer
