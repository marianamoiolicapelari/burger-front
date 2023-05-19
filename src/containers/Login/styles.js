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
    height: 70%;
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 426px;
    background: #373737;
    border-radius: 0 10px 10px 0;
    height: 70%;
    padding: 40px 50px;

        form {
            display: flex;
            flex-direction: column;
        }
        
        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
            color: #FFFFFF;
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
    color: #FFFFFF;
    margin-top: 15px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 330px;
    height: 40px;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
    padding-left: 10px;
`

export const Button = styled.button`
    width: 182.81px;
    height: 36.13px;
    background: #9758A6;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #EEEEEE;
    margin-top: 55px;
    padding: 5px 0;
    margin-bottom: 15px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;

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