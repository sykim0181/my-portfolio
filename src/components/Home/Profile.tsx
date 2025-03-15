import styled from "styled-components";
import { DivRefProps } from "../../types/interface";

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

const ProfileText = styled.h2`
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
  font-weight: bold;
`;

const ContentTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContentDescription = styled.p`
  color: #c8c8c8;
`;

interface ProfileProps extends DivRefProps {}

const Profile = ({ ref }: ProfileProps) => {
  return (
    <Wrapper ref={ref} className="hide_scrollbar">
      <ProfileText>PROFILE</ProfileText>

      <InnerContainer>
        <section>
          <SectionTitle>(Career)</SectionTitle>
          <ContentContainer>
            <ItemContainer>
              <Period>2024.04 - 2025.02</Period>
              <div>
                <ContentTitle>티맥스 가이아</ContentTitle>
                <ContentDescription>
                  문서 중심의 협업 플랫폼 GAIA Docs의 오피스(문서 편집 도구)
                  개발 연구원
                  <br />
                  프레젠테이션(Point), 도형 관련 기능 개발 및 유지 보수
                </ContentDescription>
              </div>
            </ItemContainer>
          </ContentContainer>
        </section>

        <section>
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
        </section>

        <section>
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
        </section>
      </InnerContainer>
    </Wrapper>
  );
};

export default Profile;
