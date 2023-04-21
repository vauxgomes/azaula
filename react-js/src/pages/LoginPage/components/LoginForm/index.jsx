import './style.css'
import { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('password')

  function handleSubmit(e) {
    e.preventDefault()

    if (email && password === '12345') {
      alert('Login feito com sucesso')
    } else {
      alert('Falha no login')
    }
  }

  function mudarTipo(e) {
    e.preventDefault()
    
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="form-control mb-3"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={type}
        className="form-control mb-3"
        placeholder="Password"
      />

      <div className="form-control-check">
        <input type="checkbox" id="checkbox" />
        <label className="form-label" for="checkbox">
          Remember for 30 days
        </label>
      </div>

      <button className="btn btn-dark">Log in</button>
      <hr />
      <button className="btn" onClick={mudarTipo}>Forgot password</button>
    </form>
  )
}
