import styled from "styled-components";
import { IoIosArrowRoundDown } from "react-icons/io";

import useResponsive from "../../hooks/useResponsive";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: white;
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
  align-items: center;
  width: 100%;
  position: relative;
`;

const CommonH1 = styled.h1`
  width: fit-content;
  text-align: start;
  font-size: 15vw;
  font-family: "SBAggroB";
  flex: 1;
`;
const H1ForPC = styled(CommonH1)`
  font-size: min(15vw, 8rem);
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
  padding: 2rem 0;
`;

const Button = styled.button`
  height: fit-content;
  margin: 0;
  padding: 0;
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

const Name = styled.p`
  font-style: italic;
`;

const First = () => {
  const { isMobile, isTablet } = useResponsive();

  const H1 = isTablet ? CommonH1 : H1ForPC;
  const Introduction = isMobile
    ? IntroductionForMobile
    : isTablet
      ? IntroductionForTablet
      : CommonIntroduction;

  return (
    <Wrapper>
      <InnerContainer>
        <HeadingContainer>
          <H1>Portfolio</H1>
        </HeadingContainer>
        <Content>
          <Button>
            <IoIosArrowRoundDown
              size={isMobile ? "3rem" : isTablet ? "3.5rem" : "5rem"}
            />
          </Button>
          <Introduction>
            <p>Frontend Developer</p>
            <Name>Kim Soyeon</Name>
          </Introduction>
        </Content>
      </InnerContainer>
    </Wrapper>
  );
};

export default First;
