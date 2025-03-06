import React, { forwardRef, useRef } from "react";
import styled from "styled-components";
import useDraggable from "../../hooks/useDraggable";
import { Position } from "../../types/commonTypes";

const StyledWrapper = styled.div<{ $pos: Position }>`
  position: absolute;
  left: ${({ $pos }) => `${$pos.x}%`};
  top: ${({ $pos }) => `${$pos.y}%`};
  cursor: grab;
`;

const Wrapper = forwardRef<
  HTMLDivElement,
  {
    position: Position;
    children: React.ReactNode;
  }
>((props, ref) => {
  const { position, children } = props;

  return (
    <StyledWrapper ref={ref} $pos={position}>
      {children}
    </StyledWrapper>
  );
});

interface Props {
  initialPosition: Position;
  children: React.ReactNode;
}

const Draggable = (props: Props) => {
  const { initialPosition, children } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useDraggable({ ref });

  return (
    <Wrapper ref={ref} position={initialPosition}>
      {children}
    </Wrapper>
  );
};

export default Draggable;
