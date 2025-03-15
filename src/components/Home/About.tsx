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
`;

const CommonItems = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ItemsForPC = styled(CommonItems)`
  width: 60%;
  justify-content: center;
`;

const ContentItemTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CommonContentItemTitle = styled.p`
  font-weight: bold;
`;
const ContentItemTitleForOthers = styled(CommonContentItemTitle)`
  font-size: 1.5rem;
`;
const ContentItemTitleForMobile = styled(CommonContentItemTitle)`
  font-size: 1.2rem;
`;

const CommonContentItemDescription = styled.p`
  margin-top: 1rem;
`;
const ContentItemDescriptionForMobile = styled(CommonContentItemDescription)`
  font-size: 1rem;
`;
const ContentItemDescriptionForOthers = styled(CommonContentItemDescription)`
  font-size: 1.2rem;
`;

const CommonContent = styled.div`
  display: flex;
`;
const ContentForTablet = styled(CommonContent)`
  flex-direction: column;
`;
const ContentForPC = styled(CommonContent)`
  flex-direction: row;
  justify-content: space-between;
`;

interface AboutProps extends DivRefProps {}

const About = ({ ref }: AboutProps) => {
  const { isMobile, isTablet } = useResponsive();

  const Items = isTablet ? CommonItems : ItemsForPC;

  const Content = isTablet ? ContentForTablet : ContentForPC;
  const ContentItemTitle = isMobile
    ? ContentItemTitleForMobile
    : ContentItemTitleForOthers;
  const ContentItemDescription = isMobile
    ? ContentItemDescriptionForMobile
    : ContentItemDescriptionForOthers;

  return (
    <Wrapper id="about" ref={ref} className="hide_scrollbar home_section">
      <AboutText>About</AboutText>
      <InnerContainer>
        <AboutMe id="about_me">
          <Content>
            <Memoticon />

            <Items>
              <div>
                <ContentItemTitleContainer>
                  <FaStarOfLife color="#f68eab" />
                  <ContentItemTitle>
                    끈기와 성실함이 무기인 개발자
                  </ContentItemTitle>
                </ContentItemTitleContainer>

                <ContentItemDescription>
                  주어진 문제를 끈질기게 파고들어 해결합니다.<br/>
                  모든 과제에 최선을 다하는 태도로 빠른 적응과 성장을 이루어 냅니다.
                </ContentItemDescription>
              </div>

              {/* <div>
                <ContentItemTitleContainer>
                  <FaStarOfLife color="#f68eab" />
                  <ContentItemTitle>타이틀 2</ContentItemTitle>
                </ContentItemTitleContainer>

                <ContentItemDescription>설명 2</ContentItemDescription>
              </div> */}
            </Items>
          </Content>
        </AboutMe>

        <Skill />

        <Projects />
      </InnerContainer>
    </Wrapper>
  );
};

const CommonMemoticonWrapper = styled.div`
  aspect-ratio: 1 / 1;
`;
const MemoticonWrapperForPC = styled(CommonMemoticonWrapper)`
  width: 30%;
`;
const MemoticonWrapperForTablet = styled(CommonMemoticonWrapper)`
  width: 40%;
  margin: 0 auto;
`;
const MemoticonWrapperForMobile = styled(CommonMemoticonWrapper)`
  width: 60%;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Memoticon = () => {
  const [isHover, setIsHover] = useState(false);

  const { isMobile, isTablet } = useResponsive();
  const MemoticonWrapper = isMobile
    ? MemoticonWrapperForMobile
    : isTablet
      ? MemoticonWrapperForTablet
      : MemoticonWrapperForPC;

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const src = isHover
    ? "/home/memoticon_surprised.png"
    : "/home/memoticon_smiling.png";

  return (
    <MemoticonWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Img src={src} />
    </MemoticonWrapper>
  );
};

export default About;
