
import React from 'react';
import styled from 'styled-components';

const Pipe = ({ height, width, left, top, deg }) => {
  return <StyledPipe height={height} width={width} left={left} top={top} deg={deg} />;
};

const StyledPipe = styled.div`
  position: relative;
  background-image: url("./pipe-green.png");
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: rotate(${(props) => props.deg}deg);
`;

export default Pipe;
