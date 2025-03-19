import { FallbackProps } from "react-error-boundary";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;
const SubMessage = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1rem;
  background-color: var(--primary-color);
  border-radius: 20px;
  color: white;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const ProjectErrorComponent = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const errorMsg = error.message;
  const Content = () => {
    if (errorMsg === "No Matching Project") {
      return (
        <>
          <Message>프로젝트가 존재하지 않습니다.</Message>
        </>
      );
    } else {
      return (
        <>
          <Message>현재 프로젝트 데이터를 가져오는데 실패했습니다.</Message>
          <SubMessage>확인 후 다시 시도해주세요.</SubMessage>
          <Button onClick={resetErrorBoundary}>재시도</Button>
        </>
      );
    }
  };

  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
};

export default ProjectErrorComponent;
