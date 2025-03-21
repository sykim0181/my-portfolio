import styled from "styled-components";
import useResponsive from "../../hooks/useResponsive";

const Wrapper = styled.footer`
  color: black;
`;

const Content = styled.div`
  display: flex;
  padding: 2rem;
  width: var(--default-width);
  margin: 0 auto;
  font-size: 0.8rem;
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

const LeftWrapperForMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`;

const Footer = () => {
  const { isMobile } = useResponsive();

  const ContactElement = () => <Contact>soyeon364@naver.com</Contact>;

  const LinksElement = () => (
    <Links>
      <SocialLink href="https://github.com/sykim0181" target="_blank">
        Github
      </SocialLink>
      <SocialLink href="https://sy-it.tistory.com/" target="_blank">
        Blog
      </SocialLink>
    </Links>
  );

  const CopyrightElement = () => (
    <CopyRight>©2025 KimSoyeon</CopyRight>
  );

  return (
    <Wrapper>
      <Content>
        {isMobile ? (
          <>
            <LeftWrapperForMobile>
              <ContactElement />
              <LinksElement />
            </LeftWrapperForMobile>
            <CopyrightElement />
          </>
        ) : (
          <>
            <ContactElement />
            <LinksElement />
            <CopyrightElement />
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Footer;
