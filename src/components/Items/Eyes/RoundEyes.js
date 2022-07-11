import React from "react";
import { StyledItem } from "../StyledItem";


export const RoundEyes = ({color}) => (
    <div style={{position: "absolute", top: "25%", left: "10%"}}>
    <StyledItem  width="271" height="234" viewBox="0 0 270 291" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}>
        <g fillRule="evenodd">
    <circle cx="15" cy="15" r="15" fill="#FFFBFB"/>
    <circle cx="15.5" cy="15.5" r="9.5" fill="#D12D2D"/>
    <circle cx="15.5" cy="15.5" r="7.5" fill="#100C0C"/>
    <circle cx="15" cy="15" r="15" fill="#FFFBFB"/>
    <circle cx="15.5" cy="15.5" r="9.5" fill="#754E4E"/>
    <circle cx="15.5" cy="15.5" r="7.5" fill="#100C0C"/>
    <circle cx="75" cy="15" r="15" fill="#FFFBFB"/>
    <circle cx="75.5" cy="15.5" r="9.5" fill="#D12D2D"/>
    <circle cx="75.5" cy="15.5" r="7.5" fill="#100C0C"/>
    <circle cx="75" cy="15" r="15" fill="#FFFBFB"/>
    <circle cx="75.5" cy="15.5" r="9.5" fill="#613D3D"/>
    <circle cx="75.5" cy="15.5" r="7.5" fill="#100C0C"/>
        </g>
        </StyledItem>
        </div>)


export default RoundEyes