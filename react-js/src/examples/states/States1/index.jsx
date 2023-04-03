import { useState } from 'react'

import './styles.css'

export default function States2() {
  const [corDoFundo, setCorDoFundo] = useState('amarelo')

  return (
    <main className={corDoFundo}>
      <h2>{corDoFundo}</h2>

      <h1>Exercício 01</h1>
      <p>Mudar o estado clicando no botão</p>

      <div>
        <button onClick={() => setCorDoFundo('amarelo')}>Amarelo</button>
        <button onClick={() => setCorDoFundo('verde')}>Verde</button>
        <button onClick={() => setCorDoFundo('vermelho')}>Vermelho</button>
      </div>
    </main>
  )
}
