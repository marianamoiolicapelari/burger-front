import CartLogo from '../../assets/cart-image.svg'
// import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, CartImg } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo-carrinho" />
    </Container>
  )
}
