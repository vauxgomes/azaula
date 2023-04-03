import { useState } from 'react'

import './styles.css'

export default function States2() {
  const [valor, setValor] = useState(0)

  return (
    <main>
      <h1>Exemplo 02</h1>
      <p>Mudar o estado clicando no botão</p>

      <h2>Total: {valor}</h2>

      <div>
        <button onClick={() => setValor(valor + 1)}>+1</button>
        <button onClick={() => setValor(valor + 5)}>+5</button>
        <button onClick={() => setValor(valor + 10)}>+10</button>
      </div>
    </main>
  )
}
