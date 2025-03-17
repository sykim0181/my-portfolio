import styled from "styled-components";
import { DivRefProps } from "../../types/interface";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const InnerContainer = styled.div`
  width: var(--default-width);
  max-width: var(--max-width);
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const MessageContainer = styled.div`
  grid-row: 2 / 3;
  color: white;
  font-family: "PartialSansKR-Regular";
  font-size: min(15vw, 8rem);
  text-align: center;
`;

const ContactContainer = styled.div`
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    width: 0;
    transition: width 0.5s;
  }

  &:hover::after {
    width: 100%;
    background-color: black;
  }
`;

const Copyright = styled.p`
  color: #aeaeae;
  font-size: 0.8rem;
`;

interface LastProps extends DivRefProps {}

const LastSection = ({ ref }: LastProps) => {
  return (
    <Wrapper ref={ref}>
      <InnerContainer>
        <MessageContainer>THANK YOU</MessageContainer>
        <ContactContainer>
          <p>soyeon364@naver.com</p>
          <SocialLinks>
            <SocialLink href="https://github.com/sykim0181" target="_blank">
              Github
            </SocialLink>
            <SocialLink href="https://sy-it.tistory.com/" target="_blank">
              Blog
            </SocialLink>
          </SocialLinks>
          <Copyright>©2025 KimSoyeon</Copyright>
        </ContactContainer>
      </InnerContainer>
    </Wrapper>
  );
};

export default LastSection;
