import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa6";
import { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import Skill from "./Skill";
import Projects from "./Projects";
import { DivRefProps } from "../../types/interface";

const Wrapper = styled.section`
  padding: 6rem 0;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
`;

const AboutText = styled.h2`
  color: white;
  font-family: "PartialSansKR-Regular";
  font-size: min(15vw, 8rem);
  font-weight: normal;
  line-height: min(15vw, 8rem);
  position: absolute;
  top: max(-5vw, -1rem);
`;

const InnerContainer = styled.div`
  width: var(--default-width);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const AboutMe = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Items = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContentItemTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const ContentItemTitle = styled.h2`
  font-size: 1.5rem;
`;

const ContentItemDescription = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;

const CommonContent = styled.div`
  display: flex;
`;
const ContentForTablet = styled(CommonContent)`
  flex-direction: column;
`;
const ContentForPC = styled(CommonContent)`
  flex-direction: row;
  gap: 10%;
`;

interface AboutProps extends DivRefProps {}

const About = ({ ref }: AboutProps) => {
  const { isTablet } = useResponsive();

  const Content = isTablet ? ContentForTablet : ContentForPC;

  return (
    <Wrapper ref={ref} className="hide_scrollbar">
      <AboutText>About</AboutText>
      <InnerContainer>
        <AboutMe>
          <Content>
            <Memoticon />

            <Items>
              <div>
                <ContentItemTitleContainer>
                  <FaStarOfLife color="#f68eab" />
                  <ContentItemTitle>타이틀 1</ContentItemTitle>
                </ContentItemTitleContainer>

                <ContentItemDescription>설명 1</ContentItemDescription>
              </div>

              <div>
                <ContentItemTitleContainer>
                  <FaStarOfLife color="#f68eab" />
                  <ContentItemTitle>타이틀 2</ContentItemTitle>
                </ContentItemTitleContainer>

                <ContentItemDescription>설명 2</ContentItemDescription>
              </div>
            </Items>
          </Content>
        </AboutMe>

        <Skill />

        <Projects />
      </InnerContainer>
    </Wrapper>
  );
};

const ImgForPC = styled.img`
  width: 30%;
`;
const ImgForTablet = styled.img`
  width: 40%;
  margin: 0 auto;
`;
const ImgForMobile = styled.img`
  width: 60%;
  margin: 0 auto;
`;

const Memoticon = () => {
  const [isHover, setIsHover] = useState(false);

  const { isMobile, isTablet } = useResponsive();
  const Img = isMobile ? ImgForMobile : isTablet ? ImgForTablet : ImgForPC;

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const src = isHover
    ? "/home/memoticon_surprised.png"
    : "/home/memoticon_smiling.png";

  return (
    <Img src={src} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  );
};

export default About;
