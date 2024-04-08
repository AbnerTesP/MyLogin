import React from 'react'

const Login = () => {
  return (
    <div className='r-container'>
    <span className='title'>Plus Chat</span>
    <span className='sub-title'>Login</span>
    <form action="">
        <input type="email" placeholder='Digite o email' />
        <input type="password" placeholder='Digite a senha'/>
        <button>Login</button>
    </form>
    <p>Você não tem conta? Registra</p>
</div>
  )
}

export default Login