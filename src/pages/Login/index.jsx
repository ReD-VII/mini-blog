import { async } from '@firebase/util'
import React, { useState, useEffect } from 'react'
import { useAuthentication } from '../../components/hooks/useAuthentication'

// styles
import { Conteiner } from './styles'



const Login = () => {


  const { login, loading, error: authErro } = useAuthentication()
  const [ error, setError ] = useState()




  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setError("")
     
    const res = await login(formData)

  }
  useEffect(() => {
      if(authErro){
        setError(authErro)
      }

  }, [authErro]);


  return (
    <Conteiner>
      <h1>Logn in</h1>
      <p>Entre com seu usuario</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input type="email"
            name='email'
            required
            placeholder='mail@mail.com'
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <label>
          <span>Senha</span>
          <input type="password"
            name='password '
            required
            placeholder='senha'
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </label>
        {!loading && <button className='btn' type='submit'>Logar</button>}
        {loading && <button className='btn' type='submit' disabled>Aguarde...</button>}

        {error &&
          <p className='error'>{error}</p>
        }
      </form>
    </Conteiner>
  )
}

export default Login