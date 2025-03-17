import { motion, MotionStyle, Variants } from "motion/react";
import styled from "styled-components";
import useCursor from "../../hooks/useCursor";

const Container = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  pointer-events: none;
`;

const Wrapper = styled(motion.div)`
  background-color: var(--primary-color);
  box-sizing: border-box;
  pointer-events: none;
`;

const Cursor = () => {
  const { x, y, ref, type, text } = useCursor();

  const style: MotionStyle =
    type === "none"
      ? {
          width: 0,
          height: 0,
        }
      : type === "default"
        ? {
            width: "3rem",
            height: "3rem",
          }
        : {
            width: "fit-content",
            height: "fit-content",
          };

  const variants: Variants = {
    none: {
      opacity: 0,
      x,
      y,
    },
    default: {
      opacity: 0.5,
      borderRadius: "50%",
      transition: {
        borderRadius: { ease: [0, 20, 60, 100] },
      },
      x,
      y,
    },
    project: {
      opacity: 1,
      backgroundColor: "rgb(0,0,0)",
      color: "rgb(255,255,255)",
      padding: "1rem 2rem",
      borderRadius: "2.5rem",
      transition: {
        borderRadius: { ease: [0, 20, 60, 100] },
      },
      x,
      y,
    },
  };

  return (
    <Container>
      <Wrapper ref={ref} variants={variants} animate={type} style={style}>
        {text}
      </Wrapper>
    </Container>
  );
};

export default Cursor;
