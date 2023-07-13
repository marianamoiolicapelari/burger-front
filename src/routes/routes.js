import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </Router>
  )
}

export default MyRoutes
