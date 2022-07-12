import styled from 'styled-components'

const StyledAvatarContainer = styled.div`
    background: #fff;
    position: relative;
`

const StyledAvatar = styled.div`
    // background: #fff;
    // position: absolute;
    // transform: translate(50%, 20%);
    // margin: auto;
    // width: 50%;

    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;
    background: ${props => props.color};
    position: absolute;
    transform: translate(50%, 20%);
    height: 800px;
    width: 800px;
`

export { StyledAvatarContainer, StyledAvatar }