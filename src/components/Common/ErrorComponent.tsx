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

const ErrorComponent = ({ error }: FallbackProps) => {
  console.log(error);

  return (
    <Wrapper>
      <Message>현재 페이지를 표시할 수 없습니다.</Message>
      <p>확인 후 다시 시도해주세요.</p>
    </Wrapper>
  );
};

export default ErrorComponent;
