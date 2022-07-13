import styled from 'styled-components'

import { colours } from "../../../config/colours";

export const StyledContainer = styled.div`
    background: ${colours.pw01};
    min-height: 910px;
    padding-bottom: 40px;
`

export const DownloadButton = styled.div`
    background: #15d798;
    border-radius: 1000px;
    cursor: pointer;
    padding: 20px 45px;
    color: #ffffff;
    margin-top: 30px;
    display: inline-block;
    font: normal bold 26px/1 "Open Sans", sans-serif;
    text-align: center;
`

export const Loader = styled.div`
    position: relative;
	&:before,
	&:after {
		color: #fff;
		content: '';
		display: block;
		position: absolute;
		border-radius: 50%;
		border: .1em solid transparent;
		border-bottom-color: currentcolor;
		top: 0;
		left: 50%;
		animation: 1s loader-18 linear infinite;
	}
	&:before {
		width: 1em;
		height: 1em;
	}
	&:after {
		width: .8em;
		height: .8em;
		top: .1em;
		left: 50%;
		animation-direction: reverse;
	}
}

@keyframes loader-18 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`