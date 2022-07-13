import React from "react";
import { StyledItem } from "../StyledItem";

export const Dress = ({ color }) => {
  return (
    <div style={{
        marginTop: '-10px',
        left: '70px',
        top: '155px',
        position: 'absolute',
        width: '70px',
        height: '123px',
        zIndex: '5'
      }}>
    <StyledItem
      viewBox="0 0 75 73"
      width="75"
      height="73"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M16 19S27.5-1.5 29.5 1h11c7.869 1.403 23.85 19.44 22 23-1.85 3.56-9.435 2.5-9.435 2.5S75.5 67 74.5 70 0 74 .5 70s20.174-48 20.174-48L16 19z"
      ></path>
      <path
        stroke="#000"
        strokeWidth="0.5"
        d="M29.5 1C27.5-1.5 16 19 16 19l4.674 3M29.5 1l-8.826 21M29.5 1h11m0 0c7.869 1.403 23.85 19.44 22 23-1.85 3.56-9.435 2.5-9.435 2.5M40.5 1l12.565 25.5m0 0S75.5 67 74.5 70 0 74 .5 70s20.174-48 20.174-48"
      ></path>
    </StyledItem>
    </div>
  )
};

export default Dress;
