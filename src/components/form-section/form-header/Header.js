import React from 'react'

import './index.css'
import logo from '../../../images/logo.svg'

const Header = () => {
    return (
        <div className='logo-section'>
            <img src={logo} alt='logo' />
            <h1>Expense Tracker</h1>
        </div>
    )
}

export default Header
