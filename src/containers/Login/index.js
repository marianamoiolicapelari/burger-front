import React from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { useUser } from '../../hooks/UserContext'

import Button from '../../components/Button'
import api from '../../services/api.js'
import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'

import {
  Container,
  LoginImage,
  ContainerItems,
  LogoImage,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

function Login() {
  const user = useUser()

  console.log(users)

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {

        pending: 'Verificando seus dados',
        success: 'Seja bem vindo(a)',
        error: 'Verifique seu e-mail e senha 🤯'

      }
    )

    console.log(response)
  }


  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>

        <LogoImage>
          <img src={Logo} alt="logo-code-burger" />
        </LogoImage>

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{
            marginTop: 55,
            marginBottom: 15
          }}>Sign In</Button>
        </form>

        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
