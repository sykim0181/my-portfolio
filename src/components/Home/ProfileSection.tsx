import styled from "styled-components";
import { motion } from "motion/react";
import { DivRefProps } from "../../types/interface";
import { appearMotionProps } from "../../constants/motionConfig";

const Wrapper = styled.section`
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: black;
  color: white;
  position: relative;
  padding-top: 8rem;
  padding-bottom: 6rem;
`;

const ProfileText = styled(motion.h2)`
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
  gap: 5rem;
`;

const SectionTitle = styled.h3`
  width: 100%;
  text-align: center;
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

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 5rem;
`;

const Period = styled.p`
  text-align: end;
`;

const ContentTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContentDescription = styled.p`
  color: #ffffff;
`;

interface ProfileProps extends DivRefProps {}

const ProfileSection = ({ ref }: ProfileProps) => {
  return (
    <Wrapper id="profile" ref={ref} className="hide_scrollbar home_section">
      <ProfileText {...appearMotionProps}>Profile</ProfileText>

      <InnerContainer>
        <Section>
          <SectionTitle>(Career)</SectionTitle>
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
          <SectionTitle>(Education)</SectionTitle>
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
          <SectionTitle>(etc.)</SectionTitle>
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

export default ProfileSection;
