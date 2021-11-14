import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { calcRadius, calcCircum, calcOffset } from "../../utils/helpers";

const progressColor = "#a80874";

const ProgressCircle = styled.circle`
  stroke: ${(props) => props.color};
  fill: transparent;
  cx: ${(props) => props.c}px;
  cy: ${(props) => props.c}px;
  stroke-dasharray: ${(props) => calcCircum(props.r)};
  stroke-dashoffset: ${(props) => calcOffset(props.r, props.percent)};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const Circle = ({ size, strokeWidth, percent }) => {
  return (
    <svg width={size} height={size}>
      <ProgressCircle
        r={calcRadius(size, strokeWidth)}
        c={size / 2}
        strokeWidth={strokeWidth}
        percent={100}
        color={"white"}
      />
      <ProgressCircle
        r={calcRadius(size, strokeWidth)}
        c={size / 2}
        strokeWidth={strokeWidth + 1}
        percent={percent}
        color={progressColor}
      />
    </svg>
  );
};

Circle.propType = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  percent: PropTypes.number,
};

Circle.defaultProps = {
  size: 200,
  strokeWidth: 15,
  percent: 0,
};

export default Circle;
