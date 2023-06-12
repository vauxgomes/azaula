import './style.css'
import { Context } from '../../../../providers/context/context'
import { useContext, useState } from 'react'

export default function LoginForm() {
  const { setToken } = useContext(Context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('password')

  function handleSubmit(e) {
    e.preventDefault()

    fetch('https://authorization.vauxgomes.repl.co/login', {
      method: 'POST',
      body: JSON.stringify({ username: email, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((request) => request.json())
      .then((response) => {
        if (response.success) {
          alert('Login feito com sucesso')
          setToken(response.token)
        } else {
          alert(response.message)
        }
      })
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
        type="text"
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
        <label className="form-label" htmlFor="checkbox">
          Remember for 30 days
        </label>
      </div>

      <button className="btn btn-dark">Log in</button>
      <hr />
      <button className="btn" onClick={mudarTipo}>
        Forgot password
      </button>
    </form>
  )
}
