import React, { forwardRef, useRef } from "react";
import styled from "styled-components";
import useDraggable from "../../hooks/useDraggable";
import { Position } from "../../types/commonTypes";

const StyledWrapper = styled.div<{ $pos: Position; $size: string }>`
  position: absolute;
  left: ${({ $pos }) => `${$pos.x}%`};
  top: ${({ $pos }) => `${$pos.y}%`};
  cursor: grab;
  width: ${({ $size }) => `${$size}`};
`;

const Wrapper = forwardRef<
  HTMLDivElement,
  {
    position: Position;
    size: string;
    children: React.ReactNode;
  }
>((props, ref) => {
  const { position, size, children } = props;

  return (
    <StyledWrapper ref={ref} $pos={position} $size={size}>
      {children}
    </StyledWrapper>
  );
});

interface Props {
  initialPosition: Position;
  size: string;
  children: React.ReactNode;
}

const Draggable = (props: Props) => {
  const { initialPosition, children, size } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useDraggable({ ref });

  return (
    <Wrapper ref={ref} position={initialPosition} size={size}>
      {children}
    </Wrapper>
  );
};

export default Draggable;
