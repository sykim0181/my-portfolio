import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  padding: 2rem;
`;

const Contact = styled.span`
  flex: 1;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  text-align: center;
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

const CopyRight = styled.span`
  flex: 1;
  text-align: right;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Contact>soyeon364@naver.com</Contact>

      <Links>
        <SocialLink href="https://github.com/sykim0181" target="_blank">
          Github
        </SocialLink>
        <SocialLink href="https://sy-it.tistory.com/" target="_blank">
          Blog
        </SocialLink>
      </Links>

      <CopyRight>©2025 KimSoyeon. All Rights Reserved.</CopyRight>
    </Wrapper>
  );
};

export default Footer;
