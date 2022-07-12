import styled from 'styled-components'

import { colours } from "../../../config/colours";

export const StyledContainer = styled.div`
    background: ${colours.pw01};
    min-height: 100vh;
    padding-bottom: 40px;
`

export const DownloadButton = styled.div`
    background: #15d798;
    border-radius: 1000px;
    padding: 20px 45px;
    color: #ffffff;
    display: inline-block;
    font: normal bold 26px/1 "Open Sans", sans-serif;
    text-align: center;
`
