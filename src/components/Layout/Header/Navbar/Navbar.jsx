import React from 'react'
import './Navbar.scss'
import { menuItems } from './Menu/menuItems'
import MenuItems from './Menu/MenuItems/MenuItems'

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='menus'>
        {menuItems.map((menu, index) => {
        const depthLevel = 0;
          return (
            <MenuItems items={menu} key={index} depthLevel={depthLevel} />
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;