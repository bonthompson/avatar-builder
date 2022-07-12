import React from "react";
import { StyledItem } from "../StyledItem";


export const RoundEyes = ({ color }) => (
  <div style={{ position: "absolute", top: "8%", left: "-4%" }}>
    <StyledItem width="271" height="234" viewBox="0 0 270 291" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}>
      <g
        fillOpacity="1"
        strokeDasharray="none"
        strokeOpacity="1"
        display="inline"
      >
        <circle
          cx="78.82"
          cy="80.953"
          r="10.353"
          fill="#fff"
          stroke="#000"
          strokeWidth="1.151"
          opacity="1"
        ></circle>
        <circle
          cx="114.87"
          cy="80.527"
          r="10.353"
          fill="#fff"
          stroke="#000"
          strokeWidth="1.151"
          opacity="1"
        ></circle>
        <ellipse
          cx="116.605"
          cy="80.128"
          fill={color}
          stroke="none"
          strokeWidth="0.393"
          opacity="1"
          rx="2.804"
          ry="2.804"
        ></ellipse>
        <ellipse
          cx="80.341"
          cy="79.812"
          fill={color}
          stroke="none"
          strokeWidth="0.393"
          opacity="1"
          rx="2.804"
          ry="2.804"
        ></ellipse>
      </g>
    </StyledItem>
  </div>)


export default RoundEyes