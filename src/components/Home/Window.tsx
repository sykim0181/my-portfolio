import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 10px #7f7f7f;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleBar = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: #3a3a3a;
  padding: 0.8rem;
`;

const TitleBarButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const TitleBarButton = styled.div`
  background-color: #d2d2d2;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;

const Content = styled.div`
  border-top: none;
  border-radius: 0 0 10px 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 14rem;
  font-family: "Galmuri14";
  flex: 1;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Window = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <TitleBar>
        <TitleBarButtonContainer>
          <TitleBarButton style={{ backgroundColor: "#FD5254" }} />
          <TitleBarButton style={{ backgroundColor: "#E9C32C" }} />
          <TitleBarButton style={{ backgroundColor: "#58C52D" }} />
        </TitleBarButtonContainer>
      </TitleBar>

      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Window;
