import React from 'react'
import './AdminCss.css'
import logo from '../assets/logo.png'

function Admin() {
  return (
    <div className='adminRoot'>
        <div className='adminMainContainer'>
            <div className='logoContainer'>
                <img className='logo' src={logo} alt='Kofficat Logo'/>
                <span>Admin</span>
            </div>
        </div>
    </div>
  )
}

export default Admin
