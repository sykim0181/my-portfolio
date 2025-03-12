import styled from "styled-components";
import { Description } from "../../types/commonTypes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ParagraphWrapper = styled.div`
  display: flex;

  & p:first-of-type {
    margin-right: 1rem;
  }
`;

const ContentWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface DescriptionParagraphProps {
  description: Description;
}

const DescriptionParagraph = (props: DescriptionParagraphProps) => {
  const { description } = props;

  return (
    <Wrapper>
      <ParagraphWrapper>
        <p>•</p>
        <p>{description.title}</p>
      </ParagraphWrapper>

      {description.content && (
        <ContentWrapper>
          {description.content.map((dsct, index) => (
            <ParagraphWrapper key={`content(${index})`}>
              <p>◦</p>
              <p>{dsct}</p>
            </ParagraphWrapper>
          ))}
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default DescriptionParagraph;
