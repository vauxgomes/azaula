import './styles.css'
import { NavLink } from 'react-router-dom'

export default function TopBar() {
  return (
    <nav className="topbar">
      <NavLink to="/">Principal</NavLink>
      <NavLink to="/secondary">Secundária</NavLink>
      <NavLink to="/textproperties">Propriedadades de Texto</NavLink>

      <a>Sair</a>
    </nav>
  )
}
