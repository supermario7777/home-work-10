import './index.css'
import React from 'react'

export default function SideMenu() {
  return (
    <div className='side-menu'>
        <img className='logo' src={require("./images/twitter.png")}/>
        <div>
          <img/>
          <p>Home</p>
        </div>
    </div>    
  )
}

