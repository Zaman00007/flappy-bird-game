// src/components/Bird.js
import React from 'react';
import styled from 'styled-components';

const Bird = ({ height, width, top, left }) => {
  return <StyledBird height={height} width={width} top={top} left={left} />;
};

const StyledBird = styled.div`
  position: absolute;
  background-image: url("./yellowbird-upflap.png");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export default Bird;
