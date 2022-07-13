import React from 'react';
import { StyledItem } from '../StyledItem';

export const Glasses1 = ({ color }) => {
  return (
      <div className="svg-container" style={{position: "absolute", top: "30%", left: "35%", zIndex: "10"}}>
        <StyledItem
                        width="90"
                        height="34"
                    viewBox="0 0 90 34"
                    xmlns="http://www.w3.org/2000/svg">
               <circle
        cx="17"
        cy="17"
        r="16.5"
        fill="#D9D9D9"
        fillOpacity="0.31"
        stroke="#000"
      ></circle>
      <circle
        cx="56"
        cy="17"
        r="16.5"
        fill="#D9D9D9"
        fillOpacity="0.31"
        stroke="#000"
      ></circle>
      <path
        stroke="#000"
        strokeWidth="0.5"
        d="M33.5 18.5c.018-.591 3-1 3-1s1.326-.138 3 1"
      ></path>
      <path stroke="#000" d="M71.5 23L89 11"></path>
        </StyledItem>
      </div>
  );
}

export default Glasses1;