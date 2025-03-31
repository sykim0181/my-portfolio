"use client"

import { useState } from "react";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa6";
import { motion } from "motion/react";
import useResponsive from "../../hooks/useResponsive";
import { appearMotionProps } from "../../constants/motionConfig";

const CommonWrapper = styled(motion.section)`
  display: flex;
`;
const WrapperForTablet = styled(CommonWrapper)`
  flex-direction: column;
`;
const WrapperForPC = styled(CommonWrapper)`
  flex-direction: row;
  justify-content: space-between;
`;

const CommonItems = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ItemsForPC = styled(CommonItems)`
  width: 60%;
  justify-content: center;
`;

const ContentItemTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CommonContentItemTitle = styled.p`
  font-weight: bold;
`;
const ContentItemTitleForOthers = styled(CommonContentItemTitle)`
  font-size: 1.5rem;
`;
const ContentItemTitleForMobile = styled(CommonContentItemTitle)`
  font-size: 1rem;
`;

const CommonContentItemDescription = styled.p`
  margin-top: 1rem;
`;
const ContentItemDescriptionForMobile = styled(CommonContentItemDescription)`
  font-size: .9rem;
`;
const ContentItemDescriptionForOthers = styled(CommonContentItemDescription)`
  font-size: 1.2rem;
`;

const AboutMe = () => {
  const { isMobile, isTablet } = useResponsive();

  const Wrapper = isTablet ? WrapperForTablet : WrapperForPC;
  const Items = isTablet ? CommonItems : ItemsForPC;
  const ContentItemTitle = isMobile
  ? ContentItemTitleForMobile
  : ContentItemTitleForOthers;
  const ContentItemDescription = isMobile
    ? ContentItemDescriptionForMobile
    : ContentItemDescriptionForOthers;

  return (
    <Wrapper id="about_me" {...appearMotionProps}>
      <Memoticon />

      <Items>
        <div>
          <ContentItemTitleContainer>
            <FaStarOfLife color="#f68eab" />
            <ContentItemTitle>
              끈기와 성실함이 무기인 개발자
            </ContentItemTitle>
          </ContentItemTitleContainer>

          <ContentItemDescription>
            주어진 문제를 끈질기게 파고들어 해결합니다.<br/>
            모든 과제에 최선을 다하는 태도로 빠른 적응과 성장을 이루어 냅니다.
          </ContentItemDescription>
        </div>

        <div>
          <ContentItemTitleContainer>
            <FaStarOfLife color="#f68eab" />
            <ContentItemTitle>성장을 위한 지속적 학습자</ContentItemTitle>
          </ContentItemTitleContainer>

          <ContentItemDescription>
            새로운 기술에 도전하고 학습하며, 꾸준히 더 나은 개발자로 성장하겠습니다.
          </ContentItemDescription>
        </div>
      </Items>
    </Wrapper>
  )
}

const CommonMemoticonWrapper = styled.div`
  aspect-ratio: 1 / 1;
`;
const MemoticonWrapperForPC = styled(CommonMemoticonWrapper)`
  width: 30%;
`;
const MemoticonWrapperForTablet = styled(CommonMemoticonWrapper)`
  width: 40%;
  margin: 0 auto;
`;
const MemoticonWrapperForMobile = styled(CommonMemoticonWrapper)`
  width: 60%;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Memoticon = () => {
  const [isHover, setIsHover] = useState(false);

  const { isMobile, isTablet } = useResponsive();
  const MemoticonWrapper = isMobile
    ? MemoticonWrapperForMobile
    : isTablet
      ? MemoticonWrapperForTablet
      : MemoticonWrapperForPC;

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const src = isHover
    ? "/home/memoticon_surprised.png"
    : "/home/memoticon_smiling.png";

  return (
    <MemoticonWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Img src={src} />
    </MemoticonWrapper>
  );
};

export default AboutMe;
