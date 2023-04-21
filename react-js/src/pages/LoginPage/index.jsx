import './style.css'
import LoginForm from './components/LoginForm'

export default function LoginPage() {
  return (
    <div id="login-page">
      <header className="logo">
        <i className="bx bxs-lemon bx-tada"></i>
        Azaula
      </header>

      <main>
        <div>
          <h2>Welcome back, Vaux</h2>
          <p>Welcome back! Please enter your details</p>
        </div>

        <button className="btn">
          <i className="bx bxl-google bx-xs"></i> Log in with Google
        </button>

        <div className="text-divider">or</div>

        <LoginForm />
      </main>

      <aside></aside>
    </div>
  )
}
