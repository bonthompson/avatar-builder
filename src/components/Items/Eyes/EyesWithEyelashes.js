import React from "react";
import { StyledItem } from "../StyledItem";
import styled from "styled-components";


 const StyledEyesWithEyelashes  = styled.div`
    position: absolute;
    top: 31%;
    left: 40%;
`;


export const EyesWithEyelashes = ({color}) => (
    <StyledEyesWithEyelashes className="svg-container">
    <StyledItem   width="65"
      height="23"
      fill="none"
      viewBox="0 0 65 23"  xmlns="http://www.w3.org/2000/svg" color={color}>
      <g
        fillOpacity="1"
        strokeDasharray="none"
        strokeOpacity="1"
        display="inline"
      >
       <path
        fill="#fff"
        d="M49.214 22.361c5.717 0 10.352-4.635 10.352-10.353 0-5.717-4.635-10.352-10.352-10.352-5.718 0-10.353 4.635-10.353 10.352 0 5.718 4.635 10.353 10.353 10.353z"
      ></path>
      <path
        stroke="#000"
        strokeWidth="1.151"
        d="M39.826 7.643a10.353 10.353 0 0119.74 4.365v0a10.353 10.353 0 01-9.928 10.345"
      ></path>
      <path
        fill="#280B0B"
        d="M62.98 10.136a1.067 1.067 0 10-.53-2.066l-2.686.691a1.067 1.067 0 10.531 2.066l2.686-.69zM61.82 5.995a1.066 1.066 0 10-1.015-1.877l-2.44 1.319a1.067 1.067 0 001.015 1.876l2.44-1.318z"
      ></path>
      <path
        fill="#fff"
        d="M14.8 22.361c-5.717 0-10.352-4.635-10.352-10.353 0-5.717 4.635-10.352 10.353-10.352 5.717 0 10.352 4.635 10.352 10.352 0 5.718-4.635 10.353-10.352 10.353z"
      ></path>
      <path
        stroke="#000"
        strokeWidth="1.151"
        d="M24.188 7.643a10.353 10.353 0 00-19.74 4.365v0a10.353 10.353 0 009.928 10.345"
      ></path>
      <path
        fill="#280B0B"
        d="M1.033 10.136a1.067 1.067 0 11.531-2.066l2.686.691a1.067 1.067 0 11-.531 2.066l-2.686-.69zM2.194 5.995A1.067 1.067 0 013.21 4.118l2.44 1.319a1.067 1.067 0 01-1.015 1.876l-2.44-1.318zM4.521 2.312A1.067 1.067 0 015.913.696l2.101 1.81a1.067 1.067 0 01-1.392 1.616L4.52 2.312zM59.493 2.312A1.067 1.067 0 1058.1.696L56 2.506a1.067 1.067 0 001.392 1.616l2.1-1.81zM50.948 14.413a2.804 2.804 0 100-5.607 2.804 2.804 0 000 5.607zM14.684 14.097a2.804 2.804 0 100-5.607 2.804 2.804 0 000 5.607z"
      ></path>
      </g>
        </StyledItem>
        </StyledEyesWithEyelashes>)


export default EyesWithEyelashes