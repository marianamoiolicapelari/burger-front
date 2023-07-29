import PropTypes from 'prop-types'
import { Outlet, Navigate } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoutes({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Outlet {...rest} element={component} />
    </>
  )
}

export default PrivateRoutes
PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}
