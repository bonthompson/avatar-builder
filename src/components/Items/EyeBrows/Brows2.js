import React from "react";
import { StyledItem } from "../StyledItem";


export const Brows2 = ({color = "#FFE7A8"}) => (
    <div className="svg-container" style={{position: "absolute", top: "21%", left: "43%",  zIndex: 11 }}>
    <StyledItem       
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="9"
        fill={color}
        viewBox="0 0 57 9" color={color}>
       <path
        fill={color}
        d="M41.29.406c-2.463 1.103-2.297 2.581-1.9 3.513.7 1.645.015-.076 6.682.065 7.09.15 11.823 7.48 10.154 3.775-.843-1.87-2.762-3.918-5.698-5.541C46.955.243 43.928-.554 41.29.406zM15.272.406c2.462 1.103 2.297 2.581 1.9 3.513-.7 1.645-.016-.076-6.683.065C3.4 4.134-1.332 11.464.336 7.759c.843-1.87 2.761-3.918 5.698-5.541C9.607.243 12.634-.554 15.272.406z"
      ></path>
        </StyledItem>
        </div>
)


export default Brows2