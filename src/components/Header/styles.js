import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #fff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  font-size: 16px;
  line-height: 19px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`

export const ContainerText = styled.div`
  p {
    color: #555;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`

export const PageLinkExit = styled.a`
  color: #9758a6;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`
