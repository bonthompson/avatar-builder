import styled from 'styled-components'

const StyledAvatarContainer = styled.div`
    background: #fff;
    height: 500px;
    position: relative;
`

const StyledAvatar = styled.div`
    background: #fff;
    position: absolute;
    transform: translate(50%, 20%);
    margin: auto;
    width: 50%;
`

export { StyledAvatarContainer, StyledAvatar }