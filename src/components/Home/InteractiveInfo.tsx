import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";

import Window from "./Window";
import Draggable from "./Draggable";
import useResponsive from "../../hooks/useResponsive";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  overflow: hidden;
`;

const CommonBoldParagraph = styled.p`
  text-align: center;
`;
const BoldParagraphForPC = styled(CommonBoldParagraph)`
  font-size: 2rem;
`;
const BoldParagraphForTablet = styled(CommonBoldParagraph)`
  font-size: 1.5rem;
`;
const BoldParagraphForMobile = styled(CommonBoldParagraph)`
  font-size: 1rem;
`;

const RegularParagraphForPC = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;
const RegularParagraphForTablet = styled.p`
  font-size: 0.8rem;
  margin-top: 0.8rem;
`;
const RegularParagraphForMobile = styled.p`
  font-size: 0.6rem;
  margin-top: 0.6rem;
`;

const Img = styled.img`
  width: 100%;
`;

const DraggableWindow = styled(Window)`
  aspect-ratio: 2 / 1;
`;

const InteractiveInfo = () => {
  const { isMobile, isTablet } = useResponsive();
  const backgroundColor = isMobile ? "pink" : isTablet ? "ivory" : "gray";

  const BoldParagraph = isMobile
    ? BoldParagraphForMobile
    : isTablet
      ? BoldParagraphForTablet
      : BoldParagraphForPC;

  const RegularParagraph = isMobile
    ? RegularParagraphForMobile
    : isTablet
      ? RegularParagraphForTablet
      : RegularParagraphForPC;

  return (
    <Wrapper id="interative-info" style={{ backgroundColor: backgroundColor }}>
      <Draggable
        initialPosition={{ x: 35, y: 15 }}
        size={isMobile ? "300px" : isTablet ? "350px" : "410px"}
      >
        <DraggableWindow id="introduction">
          <FiAlertTriangle size={"2rem"} />
          <BoldParagraph>404 Error</BoldParagraph>
        </DraggableWindow>
      </Draggable>

      <Draggable
        initialPosition={{ x: 10, y: 60 }}
        size={isMobile ? "120px" : isTablet ? "120px" : "120px"}
      >
        <Img src="/home/phone.png" />
      </Draggable>

      <Draggable
        initialPosition={{ x: 70, y: 15 }}
        size={isMobile ? "200px" : isTablet ? "200px" : "200px"}
      >
        <Img src="/home/tape.png" style={{ transform: "rotate(10deg)" }} />
      </Draggable>

      <Draggable
        initialPosition={{ x: 15, y: 39 }}
        size={isMobile ? "200px" : isTablet ? "200px" : "200px"}
      >
        <Img src="/home/tv.png" />
      </Draggable>

      <Draggable
        initialPosition={{ x: 78, y: 66 }}
        size={isMobile ? "200px" : isTablet ? "200px" : "200px"}
      >
        <Img src="/home/gromit.png" />
      </Draggable>

      <Draggable
        initialPosition={{ x: 25, y: 10 }}
        size={isMobile ? "200px" : isTablet ? "200px" : "200px"}
      >
        <Img src="/home/toast.png" />
      </Draggable>

      <Draggable
        initialPosition={{ x: 15, y: 60 }}
        size={isMobile ? "300px" : isTablet ? "350px" : "410px"}
      >
        <DraggableWindow id="introduction">
          <BoldParagraph>Hello, World!</BoldParagraph>
        </DraggableWindow>
      </Draggable>

      <Draggable
        initialPosition={{ x: 45, y: 40 }}
        size={isMobile ? "300px" : isTablet ? "350px" : "410px"}
      >
        <DraggableWindow id="introduction">
          <BoldParagraph>김소연</BoldParagraph>
          <BoldParagraph>FRONTEND DEVELOPER</BoldParagraph>
          <RegularParagraph>soyeon364@naver.com</RegularParagraph>
        </DraggableWindow>
      </Draggable>
    </Wrapper>
  );
};

export default InteractiveInfo;
