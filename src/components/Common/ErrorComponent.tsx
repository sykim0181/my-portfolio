import { FallbackProps } from "react-error-boundary";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  border-radius: 1rem;

  & a {
    color: white;
    display: block;
    padding: 0.8rem 1rem;
  }
`;

const ErrorComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  const Content = () => {
    const errorType = error.message;
    if (errorType === "Page Not Found") {
      return (
        <>
          <Message>잘못된 요청입니다.</Message>
          <p>확인 후 다시 시도해주세요.</p>
          <Button>
            <a href="/">홈으로 가기</a>
          </Button>
        </>
      );
    } else if (errorType === "Query Failed") {
      return (
        <>
          <Message>현재 페이지를 표시할 수 없습니다.</Message>
          <p>확인 후 다시 시도해주세요.</p>
          <Button onClick={resetErrorBoundary}>재시도</Button>
        </>
      );
    } else {
      return (
        <>
          <Message>현재 페이지를 표시할 수 없습니다.</Message>
          <p>확인 후 다시 시도해주세요.</p>
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

export default ErrorComponent;
