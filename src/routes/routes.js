import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoutes from './private-routes'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />

        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Products />} path="/produtos" />
          <Route element={<Cart />} path="/carrinho" />
        </Route>

        <Route element={<PrivateRoutes isAdmin />}>
          <Route element={<Admin />} path="/pedidos" />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
