// import PropTypes from 'prop-types'
import PropTypes from 'prop-types'
import { Outlet, Navigate } from 'react-router-dom'

import { Header } from '../components/Header'

function PrivateRoutes(component, ...rest) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <Header />
      <Outlet {...rest} element={component} />
    </>
  )
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
