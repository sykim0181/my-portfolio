import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa6";

const Wrapper = styled.section`
  padding: 6rem 0;
`;

const InnerContainer = styled.div`
  width: var(--default-width);
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Hello = styled.h1`
  font-size: 2.5rem;
`;

const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;

const ContentItem = styled.div``;

const Introduction = () => {
  return (
    <Wrapper>
      <InnerContainer>
        <Hello>
          안녕하세요
          <br />
          프론트엔드 개발자 김소연입니다.
          <br />
        </Hello>

        <Content>
          <ContentItem>
            <TitleContainer>
              <FaStarOfLife color="#f68eab" />
              <Title>타이틀 1</Title>
            </TitleContainer>

            <Description>설명 1</Description>
          </ContentItem>

          <ContentItem>
            <TitleContainer>
              <FaStarOfLife color="#f68eab" />
              <Title>타이틀 2</Title>
            </TitleContainer>

            <Description>설명 2</Description>
          </ContentItem>
        </Content>
      </InnerContainer>
    </Wrapper>
  );
};

export default Introduction;
