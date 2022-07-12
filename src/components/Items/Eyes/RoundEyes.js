import React from "react";
import { StyledItem } from "../StyledItem";


export const RoundEyes = ({color}) => (
    <div className="svg-container" style={{position: "absolute", top: "31%", left: "40%"}}>
    <StyledItem width="59"
      height="23"
      fill="none"
      viewBox="0 0 59 23"xmlns="http://www.w3.org/2000/svg" color={color}>
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="1.151"
        d="M11.353 22.132c5.717 0 10.353-4.635 10.353-10.353 0-5.717-4.636-10.352-10.353-10.352C5.635 1.427 1 6.062 1 11.779c0 5.718 4.635 10.353 10.353 10.353zM47.403 21.706c5.718 0 10.353-4.636 10.353-10.353C57.756 5.635 53.12 1 47.403 1S37.05 5.635 37.05 11.353c0 5.717 4.635 10.353 10.353 10.353z"
      ></path>
      <path
        fill="#280B0B"
        d="M49.138 13.757a2.803 2.803 0 100-5.607 2.803 2.803 0 000 5.607zM12.874 13.441a2.804 2.804 0 100-5.607 2.804 2.804 0 000 5.607z"
      ></path>
        </StyledItem>
        </div>)


export default RoundEyes