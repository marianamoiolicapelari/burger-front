// import PropTypes from 'prop-types'
import PropTypes from 'prop-types'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes(component, ...rest) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet {...rest} element={component} />
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
