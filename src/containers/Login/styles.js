import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 426px;
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 40px 50px;

  form {
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 30px;
  }
`

export const LogoImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 50%;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 330px;
  height: 35px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(75, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #cb1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
    font-weight: 400;
  }
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2px;
`
