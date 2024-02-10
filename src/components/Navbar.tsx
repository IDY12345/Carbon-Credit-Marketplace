import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='topbar'>
      <h1>Navbar</h1>
      <UserButton />
    </nav>
  )
}

export default Navbar