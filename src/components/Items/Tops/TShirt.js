import React from "react";
import { StyledItem } from "../StyledItem";

export const TShirt = ({ color= "black" }) => {
  return (
    <div className="svg-container t-shirt" style={{
        marginTop: '-10px',
        left: '11px',
        top: '27px',
        position: 'absolute',
        width: '261px',
        height: '300px'
      }}>

    <StyledItem
      viewBox="0 0 290 235"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <g
        fillOpacity="1"
        stroke="none"
        strokeDasharray="none"
        strokeOpacity="1"
        display="inline"
      >
        <path
          fill={color}
          strokeWidth="1.151"
          d="M98.664 145.276s-3.016.92-5.613 3.143c-3.43 2.938-6.933 7.608-9.19 13-.679 1.623 2.038 3.138 3.312 3.737-3.62 10.407-4.97 33.801-4.668 37.572 11.18-.261 24.365.016 34.13-.239-.226-2.669-.815-4.1-.016-5.916.461-1.05 1.505-2.013 3.804-5.723.198-3.764.739-11.236.505-16.786-.437-2.804-.716-4.106-1.01-5.155 2.693-.083 8.348.003 11.981.053-.67-7.523-7.032-14.075-11.487-18.202-4.454-4.128-8.82-5.196-10.327-5.602-3.358.25-8.78.157-11.421.118z"
          opacity="1"
        ></path>
        <path
          fill="#006e5f"
          strokeLinecap="round"
          strokeWidth="1.15"
          d="M87.14 165.106s.533-2.133 2.506-5.013c1.973-2.88 3.306-4.64 4.373-5.866 1.066-1.226 1.013-.8 1.013-.8s-2.416 2.946-4.797 6.62c-2.584 3.989-3.096 5.06-3.096 5.06z"
        ></path>
        <path
          fill="#006e5f"
          strokeLinecap="round"
          strokeWidth="1.15"
          d="M121.543 168.833l-2.927-.107s.414-4.793-.226-7.14c-.64-2.346-2.765-6.56-4.754-8.6-1.899-1.947-2.243-1.81-2.243-1.81s1.886 1.81 2.451 2.64c.566.83 3.319 4.94 4.148 7.881.83 2.941.226 7.391.226 7.391z"
        ></path>
      </g>

    </StyledItem>
    </div>
  )
};

export default TShirt;
