import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SecondaryPage from './pages/SecondaryPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/secondary',
    element: <SecondaryPage />
  }
])

function App() {
  const [token, setToken] = useState('')

  if (!token) {
    return <LoginPage setToken={setToken} />
  }

  return <RouterProvider router={router} />
}

export default App
