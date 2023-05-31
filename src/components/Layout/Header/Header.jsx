import React from 'react'
import './Header.scss'
import logo from '~/assets/img/TpBankLG2.png'
import Navbar from './Navbar/Navbar'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header-logo'>
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <div className='header-title'>
          <span className='title'>THANH TOÁN THUẾ ĐIỆN TỬ</span>
        </div>
      </div>
      <div className='nav-area'>
        <Navbar></Navbar>
      </div>
    </header>
  )
}

export default Header