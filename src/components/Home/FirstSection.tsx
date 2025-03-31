import styled from "styled-components";
import { IoIosArrowRoundDown } from "react-icons/io";
import useResponsive from "../../hooks/useResponsive";

const Wrapper = styled.section`
  width: 100%;
  height: 100dvh;
`;

const InnerContainer = styled.div`
  width: var(--default-width);
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const CommonH1 = styled.h1`
  width: fit-content;
  text-align: start;
  font-size: 15vw;
  font-family: "SBAggroB";
`;
const H1ForPC = styled(CommonH1)`
  font-size: min(15vw, 8rem);
`;

const CommonGreeting = styled.h2`
  font-weight: normal;
`;
const GreetingForPC = styled(CommonGreeting)`
  font-size: 1.5rem;
`;
const GreetingForTablet = styled(CommonGreeting)`
  font-size: 1.2rem;
`;
const GreetingForMobile = styled(CommonGreeting)`
  font-size: 0.8rem;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
  padding: 2rem 0;
`;

const CommonIntroduction = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
`;
const IntroductionForTablet = styled(CommonIntroduction)`
  font-size: 1rem;
`;
const IntroductionForMobile = styled(CommonIntroduction)`
  flex-direction: column;
  gap: 0;
  align-items: end;
  font-size: 0.8rem;
`;

const Italic = styled.p`
  font-style: italic;
`;

const FirstSection = () => {
  const { isMobile, isTablet } = useResponsive();

  const H1 = isTablet ? CommonH1 : H1ForPC;
  const Greeting = isMobile
    ? GreetingForMobile
    : isTablet
      ? GreetingForTablet
      : GreetingForPC;
  const Introduction = isMobile
    ? IntroductionForMobile
    : isTablet
      ? IntroductionForTablet
      : CommonIntroduction;

  return (
    <Wrapper id="first">
      <InnerContainer>
        <HeadingContainer>
          <H1>Portfolio</H1>
          <Greeting>안녕하세요, 프론트엔드 개발자 김소연입니다 :)</Greeting>
        </HeadingContainer>
        <Content>
          <IoIosArrowRoundDown
            size={isMobile ? "3rem" : isTablet ? "3.5rem" : "5rem"}
          />
          <Introduction>
            <p>Email</p>
            <Italic>soyeon364@naver.com</Italic>
          </Introduction>
        </Content>
      </InnerContainer>
    </Wrapper>
  );
};

export default FirstSection;
