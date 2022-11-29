import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { Conteiner } from './styles'
import { useAuthValue } from '../context/AuthContext'


const Menu = ({ isVisible }) => {
    const { user } = useAuthValue()
    const { logaut } = useAuthentication()
    
    const closeMenu = () => {
        isVisible(!isVisible)
        logaut()
    }

    return (
        <Conteiner>
            <nav className='nav_menu'>
                <ul>
                    <li>
                        <NavLink
                            onClick={() => isVisible(!isVisible)}
                            to='/'
                            className="link"
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => isVisible(!isVisible)}
                            to='/about'
                            className="link"
                        >About</NavLink>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <NavLink
                                    onClick={() => isVisible(!isVisible)}
                                    to='/login'
                                    className="link"
                                >Login</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => isVisible(!isVisible)}
                                    to='/register'
                                    className="link"
                                >Register</NavLink>
                            </li>
                        </>
                    )}
                    {user &&
                        <>
                            <li>
                                <NavLink 
                                onClick={() => isVisible(!isVisible)}
                                className="link" 
                                to='/createpost' 
                                >Criar post</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                onClick={() => isVisible(!isVisible)}
                                className="link" 
                                to='/dashboard' 
                                >Dashboard</NavLink>
                            </li>
                        </>
                    }
                    {user &&
                        <li>
                            <li className="link" onClick={() => closeMenu()}>Sair</li>
                        </li>
                    }
                </ul>
            </nav>
        </Conteiner>
    )
}

export default Menu