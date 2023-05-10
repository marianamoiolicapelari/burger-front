import React from 'react'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'

import {
  Container,
  LoginImage,
  ContainerItems,
  LogoImage,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image"/>
      <ContainerItems>

        <LogoImage>
          <img src={Logo} alt="logo-code-burger"/>
        </LogoImage>
      
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>
        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
