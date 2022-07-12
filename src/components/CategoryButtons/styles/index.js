import styled from 'styled-components'

const CategoryButtonsContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
`

const CategoryButton = styled.div`
    height: 70px;
    width: 70px;
    background: #61dafb;
    margin: 5px 0px;
    border-radius: 50px;
    svg {
        margin-top: 10px;
    }
    // &:hover {
    //   }
`

export { CategoryButtonsContainer, CategoryButton }