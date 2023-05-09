import React from 'react'

import {
  Container,
  Background,
  ContainerItems,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <Background />
      <ContainerItems>
        <img />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>SignIn</Button>
        <SignInLink>
          Não possui conta? <a>SignUp</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
