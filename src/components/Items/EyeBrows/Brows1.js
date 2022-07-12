import React from "react";
import { StyledItem } from "../StyledItem";


export const Brows1 = ({ color = "#FFE7A8" }) => (
  <div className="svg-container" style={{ position: "absolute", top: "21%", left: "43%" }}>
    <StyledItem
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="10"
      fill="none"
      viewBox="0 0 51 10" color={color}>
      <path
        fill={color}
        d="M33.197 4.896c-1.207 2.413-.142 3.452.754 3.922 1.584.83 5.084 1.85 10.332-2.263 5.581-4.374 8.768-3.62 5.129-5.43-1.837-.914-4.619-1.283-7.92-.679-4.015.735-6.862 2.037-8.295 4.45zM17.767 4.745c1.207 2.414.142 3.452-.754 3.922-1.584.83-5.084 1.85-10.332-2.263C1.1 2.03-2.087 2.784 1.552.974 3.39.061 6.171-.308 9.472.295c4.015.735 6.862 2.037 8.295 4.45z"
      ></path>
    </StyledItem>
  </div>
)


export default Brows1