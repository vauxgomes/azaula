import { useState, createContext } from 'react'

export const Context = createContext()

export default function ContextProvider({ children }) {
  const [token, setToken] = useState('')
  
  return (
    <Context.Provider value={{ token, setToken }} >
      {children}
    </Context.Provider>
  )
}