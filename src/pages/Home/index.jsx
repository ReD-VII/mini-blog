import React from 'react'


import { useAuthValue } from '../../components/context/AuthContext'

const Home = () => {
  const { user } = useAuthValue();
  return (
    <div >
      <h1>home</h1>
      {user &&
        <p>Olá {user.displayName}</p>
      }
    </div>
  )
}

export default Home