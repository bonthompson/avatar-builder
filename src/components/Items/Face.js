import React from "react";
import Eyes from "./Eyes";
import Hair from "./Hair";
import Mouth from "./Mouth";
import { StyledItem } from "./StyledItem";

export const Face = ({ color = "#E3CDAB" }) => (
  <div
    style={{
      position: "relative",
      marginTop: "10%",
      display: "inline-flex",
      flexDirection: "column",
      position: "relative",
    }}
  >
    <Eyes />
    <Hair />
    <Mouth />
    <StyledItem
      width="169"
      height="199"
      viewBox="0 0 169 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <g fillRule="evenodd">
        <path d="M168.556 99.5C168.556 154.452 130.947 199 84.5555 199C38.1636 199 0.555542 154.452 0.555542 99.5C0.555542 44.5477 38.1636 0 84.5555 0C130.947 0 168.556 44.5477 168.556 99.5Z" />
      </g>
    </StyledItem>
  </div>
);

export default Face;
