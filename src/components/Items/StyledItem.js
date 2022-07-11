import React from "react";
import styled from "styled-components";

export const StyledItem = styled('svg')`
  fill: ${props => props.color};
  stroke: ${props => props.stroke};
  stroke-width: ${props => props.strokeWidth};
`