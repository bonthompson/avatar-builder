import styled from 'styled-components'

const ItemCarouselContainer = styled.div`
    width: 80%;
    margin: auto;
    position relative;
`

const StyledSlide = styled.div`
    // border: 3px solid black;
    overflow: hidden;
    background: lightgray;
    height: 90px;
    width: 90px !important;
  
  svg {
    height: 90px;
    width: 90px;
  }
`

const StyledDiv = styled.div`
    position: absolute;
    top: -300px

`

export { ItemCarouselContainer, StyledSlide, StyledDiv }