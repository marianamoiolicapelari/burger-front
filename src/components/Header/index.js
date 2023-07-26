import { useLocation, useNavigate } from 'react-router-dom'

import Cart from '../../assets/cart.png'
import Person from '../../assets/person.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  PageLink,
  PageLinkExit,
  Line
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          {' '}
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          {' '}
          <img src={Person} alt="logo-pessoa" />
        </PageLink>
        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
