import React from "react";
import { StyledItem } from "../StyledItem";
import styled from "styled-components";


 const StyledShoes  = styled.div`
    position: absolute;
    top: 110%;
    left: 48%;
`;


export const Shoes1 = ({color}) => (
    <StyledShoes className="svg-container">
    <StyledItem      
        xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="14"
      fill="none"
      viewBox="0 0 43 14" color={color}>
      <g
        fillOpacity="1"
        strokeDasharray="none"
        strokeOpacity="1"
        display="inline"
      >
       <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="0.61"
        d="M1.578 10.115s-.566 1.831.302 2.171c.868.34 8.767.584 11.457.51 3.404-.093 8.706.207 9.573-.643.869-.85-.251-2.34-.306-3.457-.053-1.096-3.364 1.55-7.01 1.55-3.645 0-14.016-.131-14.016-.131z"
      ></path>
      <path
        fill="teal"
        stroke="#004D4D"
        strokeLinecap="round"
        strokeWidth="0.3"
        d="M1.706 7.527s7.465-2.38 8.16-3.57c.694-1.19.347-2.89.347-2.89s2.43-.34 3.645.51c1.215.85 2.083 3.23 2.083 3.23s5.005.21 6.771-1.19c1.107-.877.587 6.326.587 6.326s-6.316 1.493-12.74 1.493c-6.422 0-9.28.377-9.547-.85 0 0-.16-2.313.694-3.06z"
      ></path>
      <path
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="0.61"
        d="M20.099 10.115s-.566 1.831.302 2.171c.868.34 8.767.584 11.457.51 3.404-.093 8.705.207 9.573-.643.869-.85-.251-2.34-.306-3.457-.053-1.096-3.364 1.55-7.01 1.55-3.645 0-14.016-.131-14.016-.131v0z"
      ></path>
      <path
        fill="teal"
        stroke="#004D4D"
        strokeLinecap="round"
        strokeWidth="0.31"
        d="M20.227 7.527s7.465-2.38 8.16-3.57c.694-1.19.347-2.89.347-2.89s2.43-.34 3.645.51c1.215.85 2.084 3.23 2.084 3.23s5.004.21 6.77-1.19c1.107-.877.587 6.326.587 6.326s-6.316 1.493-12.74 1.493c-6.422 0-9.28.377-9.547-.85 0 0-.16-2.313.694-3.06z"
      ></path>
      </g>
        </StyledItem>
        </StyledShoes>)


export default Shoes1