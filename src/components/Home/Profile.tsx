import styled from "styled-components";
import { motion } from "motion/react";
import { appearMotionProps } from "../../constants/motionConfig";
import useResponsive from "../../hooks/useResponsive";

const Wrapper = styled.section``;

const Title = styled(motion.h3)`
  font-size: 2.5rem;
  font-family: "Montserrat";
  text-align: center;
  margin-bottom: 2rem;
`;

const InnerContainer = styled.div`
  width: var(--default-width);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const SectionTitle = styled.h4`
  width: 100%;
  font-size: 2rem;
  font-family: "Montserrat";
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CommonItemContainer = styled.div``;
const ItemContainerForTablet = styled(CommonItemContainer)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 5rem;
`;
const ItemContainerForMobile = styled(CommonItemContainer)`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const PeriodForTablet = styled.p`
  text-align: end;
`;
const PeriodForMobile = styled.p`
  text-align: start;
  font-size: .9rem;
`;

const ContentTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContentDescription = styled.p``;

const Profile = () => {
  const { isMobile } = useResponsive();

  const ItemContainer = isMobile ? ItemContainerForMobile : ItemContainerForTablet;
  const Period = isMobile ? PeriodForMobile : PeriodForTablet;

  return (
    <Wrapper>
      <Title {...appearMotionProps}>Profile</Title>
      <InnerContainer>
        <Section>
          <SectionTitle>Career</SectionTitle>
          <ContentContainer>
            <ItemContainer>
              <Period>2024.04 - 2025.02</Period>
              <div>
                <ContentTitle>(주)티맥스가이아</ContentTitle>
                <ContentDescription>
                  문서 협업 플랫폼 GAIA Docs의 오피스(문서 편집 앱) 개발 연구원
                  <br />
                  프레젠테이션(Point), 도형 관련 기능 개발 및 유지 보수
                </ContentDescription>
              </div>
            </ItemContainer>
          </ContentContainer>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          <ContentContainer>
            <ItemContainer>
              <Period>2019.03 - 2024.02</Period>
              <div>
                <ContentTitle>건국대학교</ContentTitle>
                <ContentDescription>컴퓨터공학부</ContentDescription>
              </div>
            </ItemContainer>
          </ContentContainer>
        </Section>

        <Section>
          <SectionTitle>etc.</SectionTitle>
          <ContentContainer>
            <ItemContainer>
              <Period>2022.09</Period>
              <div>
                <ContentTitle>정보처리기사</ContentTitle>
              </div>
            </ItemContainer>

            <ItemContainer>
              <Period>2024.01</Period>
              <div>
                <ContentTitle>영어 TOEIC </ContentTitle>
                <ContentDescription>975</ContentDescription>
              </div>
            </ItemContainer>
          </ContentContainer>
        </Section>
      </InnerContainer>
    </Wrapper>
  );
};

const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.section {...appearMotionProps}>{children}</motion.section>
);

export default Profile;
