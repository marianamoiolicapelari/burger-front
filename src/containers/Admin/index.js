import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const location = useLocation()
  return (
    <Container>
      <SideMenuAdmin></SideMenuAdmin>
      <ContainerItems>
        {location.pathname === paths.Order && <Orders />}
        {location.pathname === paths.ListProducts && <ListProducts />}
        {/* {location.pathname === paths.NewProduct && <NewProduct />}
        {location.pathname === paths.EditProduct && <EditProduct />} */}
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}
