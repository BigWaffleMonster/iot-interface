import React from 'react'
import {useRoutes} from './routes/router'
import NavBar from './NavBar'

function App() {
  const router = useRoutes()
  return (
    <div >
      <NavBar />
      {router}
    </div>
  )
}

export default App
