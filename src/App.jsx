import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
function App() {

  const element = useRoutes(routes);
  return (
    <>
      {element}
    </>
  )
}

export default App
