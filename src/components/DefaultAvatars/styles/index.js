import styled from 'styled-components'

const DefaultAvatarsContainer = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
}
`

const DefaultAvatarButton = styled.div`
    height: 70px;
    width: 70px;
    background: #fff;
    margin: 0px 5px;
    border-radius: 50px;
    p {
        margin-top: 20px;
    }
`

export { DefaultAvatarsContainer, DefaultAvatarButton }