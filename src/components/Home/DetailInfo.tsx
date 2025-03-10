import styled from "styled-components";
import useResponsive from "../../hooks/useResponsive";

const Wrapper = styled.section`
  background-color: #c9c2d0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 300;
  font-style: italic;
`;

const InfoSection = styled.section`
  width: var(--default-width);
`;

const InfoContent = styled.div`
  background-color: #e7dfe4;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
`;

const Item = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

const ItemForPC = styled(Item)`
  display: flex;
`;

const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3 * 1);

  & p {
    color: #747474;
  }
`;

const ItemDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ItemDescriptionsForPC = styled(ItemDescriptions)`
  flex-basis: calc(100% / 3 * 2);
`;

const ItemDescriptionsForMobile = styled(ItemDescriptions)`
  margin-top: 1.5rem;
`;

const ItemDescriptionWrapper = styled.div`
  display: flex;

  & p:first-of-type {
    margin-right: 5px;
  }
`;

const ItemDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <ItemDescriptionWrapper>
      <p>•</p>
      <p>{children}</p>
    </ItemDescriptionWrapper>
  );
};

const DetailInfo = () => {
  const { isMobile } = useResponsive();

  const InfoContentItem = isMobile ? Item : ItemForPC;
  const ItemDescriptions = isMobile
    ? ItemDescriptionsForMobile
    : ItemDescriptionsForPC;

  return (
    <Wrapper>
      <InfoSection>
        <Title>(Education)</Title>
        <InfoContent>
          <InfoContentItem>
            <ItemTitleWrapper>
              <H3>건국대학교</H3>
              <p>2019.03 - 2024.02</p>
            </ItemTitleWrapper>

            <ItemDescriptions>
              <ItemDescription>전공: 컴퓨터공학부</ItemDescription>
              <ItemDescription>학점: 4.02 / 4.5</ItemDescription>
            </ItemDescriptions>
          </InfoContentItem>
        </InfoContent>
      </InfoSection>

      <InfoSection>
        <Title>(Career)</Title>
        <InfoContent>
          <InfoContentItem>
            <ItemTitleWrapper>
              <H3>티맥스 가이아</H3>
              <p>2024.04 - 2025.02</p>
            </ItemTitleWrapper>

            <ItemDescriptions>
              <ItemDescription>
                문서 작성 웹 애플리케이션 GAIA Docs 개발
              </ItemDescription>
              <ItemDescription>
                프레젠테이션 앱(Point), 도형 관련 기능 개발 및 유지 보수
              </ItemDescription>
            </ItemDescriptions>
          </InfoContentItem>
        </InfoContent>
      </InfoSection>
    </Wrapper>
  );
};

export default DetailInfo;
