import React from 'react';
import { StyledItem } from '../StyledItem';

export const Brows3 = ({ color }) => {
  return (
    <div className="svg-container" style={{position: "absolute", top: "21%", left: "43%",  zIndex: 11 }}>
        <StyledItem width="98"
                    height="154"
                    viewBox="0 0 98 154" xmlns="http://www.w3.org/2000/svg" color={color}>
          <g transform="translate(0 5.2917)" fill="#a05a2c">
            <path d="m105.8 59.74c-1.7039 2.0922-0.89147 3.3382-0.11908 3.9918 1.3648 1.155-0.0197-0.07499 5.9993-2.9451 6.4005-3.0521 13.923 1.3684 10.767-1.1913-1.5935-1.2922-4.2277-2.2588-7.5804-2.3891-4.0793-0.15852-7.1419 0.49085-9.0666 2.5337z"/>
            <path d="m89.46 60.015c1.7043 2.0919 0.89215 3.338 0.1199 3.9918-1.3645 1.1553 0.01969-0.075-5.9999-2.9439-6.4011-3.0508-13.923 1.3713-10.767-1.1891 1.5932-1.2925 4.2272-2.2597 7.5799-2.3907 4.0792-0.15936 7.142 0.48938 9.0671 2.5319z"/>
          </g>
        </StyledItem>
      </div>
  );
}