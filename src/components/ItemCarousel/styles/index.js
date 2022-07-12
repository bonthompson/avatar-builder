import styled from 'styled-components'

const ItemCarouselContainer = styled.div`
    width: 80%;
    margin: auto;
`

const StyledSlide = styled.div`
    // border: 3px solid black;
    overflow: hidden;
    background: lightgray;
    height: 90px;
    width: 90px !important;
    svg {
        // fill: white;
        width: 70px !important;
        height: 70px !important;
        left: auto !important;
        top: 10px !important;
        position: relative !important;
    }
`

export { ItemCarouselContainer, StyledSlide }