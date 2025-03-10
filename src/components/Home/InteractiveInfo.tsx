import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";

import Window from "../Window";
import Draggable from "./Draggable";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  background-color: #e6e6e6;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  overflow: hidden;
`;

const BoldParagraph = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const InteractiveInfo = () => {
  return (
    <Wrapper id="interative-info">
      <Draggable initialPosition={{ x: 35, y: 15 }}>
        <Window id="introduction">
          <FiAlertTriangle size={"2rem"} />
          <BoldParagraph>404 Error</BoldParagraph>
        </Window>
      </Draggable>

      <Draggable initialPosition={{ x: 10, y: 60 }}>
        <img src="/home/phone.png" width={100} />
      </Draggable>

      <Draggable initialPosition={{ x: 70, y: 15 }}>
        <img
          src="/home/tape.png"
          width={200}
          style={{ transform: "rotate(10deg)" }}
        />
      </Draggable>

      <Draggable initialPosition={{ x: 15, y: 39 }}>
        <img src="/home/tv.png" width={180} />
      </Draggable>

      <Draggable initialPosition={{ x: 78, y: 66 }}>
        <img src="/home/gromit.png" width={200} />
      </Draggable>

      <Draggable initialPosition={{ x: 25, y: 10 }}>
        <img src="/home/toast.png" width={200} />
      </Draggable>

      <Draggable initialPosition={{ x: 15, y: 60 }}>
        <Window id="introduction">
          <BoldParagraph>Hello, World!</BoldParagraph>
        </Window>
      </Draggable>

      <Draggable initialPosition={{ x: 45, y: 40 }}>
        <Window id="introduction">
          <BoldParagraph>김소연</BoldParagraph>
          <BoldParagraph>FRONTEND DEVELOPER</BoldParagraph>
          <p style={{
            marginTop: '1rem'
          }}>soyeon364@naver.com</p>
        </Window>
      </Draggable>
    </Wrapper>
  );
};

export default InteractiveInfo;
