import styled from "styled-components";
import { motion } from "motion/react";
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

const MessageContainer = styled(motion.div)`
  grid-row: 2 / 3;
  color: white;
  font-family: "PartialSansKR-Regular";
  font-size: min(10vw, 8rem);
  text-align: center;
  display: flex;
  justify-content: center;
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

  const Message = Array.from("Thank You").map((char, index) => (
    <motion.span
      key={`message-${index}`}
      initial={{
        translateY: "100%",
        rotateX: "-80deg",
        opacity: 0,
      }}
      whileInView={{
        translateY: "0",
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        delay: 0.1 * index,
        duration: 0.5,
      }}
    >
      {char}
    </motion.span>
  ));

  return (
    <Wrapper ref={ref} id="last" className="home_section">
      <InnerContainer>
        <MessageContainer>{Message}</MessageContainer>
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
