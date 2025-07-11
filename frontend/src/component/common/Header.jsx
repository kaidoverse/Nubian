import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'
import CartDrawer from '../layout/CartDrawer'

const Header = () => {
    return (
        <header className='border-b border-gray-200'>
            {/* topbar*/}
            <Topbar />
            {/* navbar*/}
            <Navbar />
            {/* cart drawer*/}
        </header>
    )
}

export default Header