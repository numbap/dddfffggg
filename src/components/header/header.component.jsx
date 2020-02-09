import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import './header.styles.scss'

import {ReactComponent as Logo } from '../../assets/images/crown.svg'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

const Header = ({currentUser}) => (
    <BrowserRouter>
    <div className='header'>
        <Link to="/" className='logo-container'><Logo className="logo" /></Link>

        <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }

        </div>
    
    </div>
    </BrowserRouter>
)

export default Header