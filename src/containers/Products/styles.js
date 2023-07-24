import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 40px;
  margin-top: 20px;
`