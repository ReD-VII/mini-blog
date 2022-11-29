import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

// logo
import Logo from '../../assets/logo.svg'
import Menu from '../Menu'

// styles
import { Conteiner } from './styles'

// Hooks
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'


const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [screen, setScreen] = useState(window.innerWidth)

    const { user } = useAuthValue()
    const { logaut } = useAuthentication()


    return (
        <>
            <Conteiner>
                <div className='cont_box' style={{ zIndex: 100 }}>
                    <NavLink to='/'>
                        <img src={Logo} alt="Mini Blog" />
                    </NavLink>
                </div>

                <div className='cont_box'>

                </div>

                <div className='cont_box' >
                    {screen < 800 &&
                        <IoMenu onClick={() => setIsActive(!isActive)} style={{ zIndex: 100, marginRight: '25px' }} size={30} color="#000" />
                    }
                    {screen > 800 &&
                        <nav className='nav_menu'>
                            <ul>
                                <li>
                                    <NavLink className="link" to='/' >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to='/about' >About</NavLink>
                                </li>
                                {user &&
                                    <>
                                        <li>
                                            <NavLink className="link" to='/createpost' >Criar post</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="link" to='/dashboard' >Dashboard</NavLink>
                                        </li>
                                    </>
                                }
                                {!user && (
                                    <>
                                        <li>
                                            <NavLink className="link" to='/login' >Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="link" to='/register' >Register</NavLink>
                                        </li>
                                    </>
                                )}
                                {user &&
                                    <li>
                                        <li className="link"  onClick={logaut}>Sair</li>
                                    </li>
                                }
                            </ul>
                        </nav>
                    }
                </div>
            </Conteiner>
            {isActive &&
                <Menu isVisible={setIsActive} />
            }
        </>
    )
}

export default Header