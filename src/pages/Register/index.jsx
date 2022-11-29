import React, { useState, useEffect } from 'react'
import { useAuthentication } from '../../components/hooks/useAuthentication'


// styles
import { Conteiner } from './styles'





const Register = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    repetPassw: ''
  })

  const { createUser, error: authError, loading } = useAuthentication()





  const [error, setError] = useState('')




  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.repetPassw) {
      setError("As senhas precisam ser iguais")
      return
    } else {
      setError(false)
      console.log(`
        Nome: ${formData.displayName}
        Email: ${formData.email}
        Senha: ${formData.password}
      `)
    }

    const res = await createUser(formData)
    console.log(`RESPOSTA DE res : ${res.displayName}`)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <Conteiner>
      <h1>Cadastre-se</h1>
      <p>Crie sua conta agora mesmo</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input type="text"
            name='displayName'
            required
            placeholder='Seu nome'
            onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
          />
        </label>
        <label>
          <span>Email</span>
          <input type="email"
            name='email '
            required
            placeholder='Seu email '
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <label>
          <span>Senha</span>
          <input type="password"
            name='email '
            required
            placeholder='Sua senha'
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </label>
        <label>
          <span>Repita sua senha</span>
          <input type="password"
            name='email '
            required
            placeholder='Repita sua senha'
            onChange={(e) => setFormData({ ...formData, repetPassw: e.target.value })}
          />
        </label>
        {!loading && <button className='btn' type='submit'>Registrar</button>}
        {loading && <button className='btn' type='submit' disabled>Aguarde...</button>}

        {error &&
          <p className='error'>{error}</p>
        }
      </form>
    </Conteiner>
  )
}

export default Register