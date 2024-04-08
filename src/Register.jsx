import React from 'react'

const Register = () => {
  return (
    <div className='r-container'>
        <span className='title'>Plus Chat</span>
        <span className='sub-title'>Registro</span>
        <form action="">
            <input type="text" placeholder='Digite o nome' />
            <input type="email" placeholder='Digite o email' />
            <input type="password" placeholder='Digite a senha'/>
            <button>Registrar</button>
        </form>
        <p>Tens conta ? Login</p>
    </div>
  )
}

export default Register