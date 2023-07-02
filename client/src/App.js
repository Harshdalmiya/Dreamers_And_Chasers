import React from 'react'
import Login from './pages/auth/Login'
import Home from './pages/auth/Home'
import PrivateRoute from './components/Routes/PrivateRoute'


const App = () => {
  return (
    <div>
      <PrivateRoute>
        <Home />
      </PrivateRoute>

    </div>

  )
}

export default App
