import styled from 'styled-components'

const DefaultAvatarsContainer = styled.div`
    // display: inline-flex;
    // width: 100%;
    // justify-content: center;
    // margin-top: 20px;
    position: absolute;
    top: 0;
}
`

const DefaultAvatarButton = styled.div`
    height: 70px;
    width: 70px;
    background: #fff;
    margin: 0px 5px;
    border-radius: 50px;
    cursor: pointer;
    p {
        padding-top: 20px;
    }
`

export { DefaultAvatarsContainer, DefaultAvatarButton }