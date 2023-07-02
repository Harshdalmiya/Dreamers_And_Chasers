import React from 'react'
import Login from './pages/auth/Login'
import Home from './pages/auth/Home'
import PrivateRoute from './components/Routes/PrivateRoute'
import HomePage from './pages/auth/SemiHomePage'


const App = () => {
  return (
    <div>
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>

    </div>

  )
}

export default App
