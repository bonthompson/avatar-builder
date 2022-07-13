import React from 'react';
import { StyledItem } from '../StyledItem';

export const Bowtie1 = ({ color }) => {
  return (
      <div className="svg-container" style={{position: "absolute", top: "68%", left: "53%", zIndex: "10"}}>
        <StyledItem
                           xmlns="http://www.w3.org/2000/svg"
                           width="27"
                           height="13"
                           fill={color}
                           viewBox="0 0 27 13">
  <path
        d="M11.78 6.333L25.201.028c1.86 7.722.705 8.854-.065 12.748L11.779 6.333z"
      ></path>
      <path
        d="M14.412 6.895L.782 12.738C-.812 4.958.38 3.865 1.282 0l13.13 6.895z"
      ></path>
      <path fill="#250F4F" d="M16.088 6.46a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </StyledItem>
      </div>
  );
}

export default Bowtie1;