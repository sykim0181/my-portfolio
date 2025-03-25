import styled from "styled-components";
import { useState } from "react";
import { Description, Project } from "../../types/commonTypes";
import useResponsive from "../../hooks/useResponsive";
import ProjectModalContentSkeleton from "./ProjectModalContentSkeleton";
import { convertToPeriodStr } from "../../utils";
import DescriptionParagraph from "../Common/DescriptionParagraph";

const IntroductionForCommon = styled.section`
  display: flex;
`;
const IntroductionForPC = styled(IntroductionForCommon)`
  flex-direction: row;
  gap: 1rem;
`;
const IntroductionForMobile = styled(IntroductionForCommon)`
  flex-direction: column;
`;

const BriefDescriptionForCommon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BriefDescriptionForPC = styled(BriefDescriptionForCommon)`
  padding: 1rem;
  flex: 1;

  & p:nth-of-type(1) {
    font-size: 1.2rem;
  }
`;
const BriefDescriptionForTablet = styled(BriefDescriptionForCommon)`
  margin-top: 1rem;

  & p:nth-of-type(1) {
    font-size: 1rem;
  }
`;

const Skills = styled.div`
  display: flex;
  column-gap: 1rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
`;

const SkillForCommon = styled.div`
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  border: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const SkillForTablet = styled(SkillForCommon)`
  font-size: 0.8rem;
`;
const SubTitle = styled.h2`
  margin-bottom: 1rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface ProjectModalContentProps {
  project?: Project;
  isFetching: boolean;
  error: Error | null;
}

const ProjectModalContent = (props: ProjectModalContentProps) => {
  const { project, isFetching, error } = props;

  const { isTablet } = useResponsive();

  if (error) {
    throw new Error(error.message);
  }

  if (isFetching || project === undefined) {
    return <ProjectModalContentSkeleton />;
  }

  const Introduction = isTablet ? IntroductionForMobile : IntroductionForPC;
  const Skill = isTablet ? SkillForTablet : SkillForCommon;
  const BriefDescription = isTablet
    ? BriefDescriptionForTablet
    : BriefDescriptionForPC;

  return (
    <>
      <Introduction>
        <ProjectImage isMobile={isTablet} src={project.image} />
        <BriefDescription>
          <p>{project.short_description}</p>
          <p>{convertToPeriodStr(project.period_start, project.period_end)}</p>
          <p>{project.additional_short_description}</p>
        </BriefDescription>
      </Introduction>

      <Skills>
        {project.skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </Skills>

      <section>
        <SubTitle>상세 설명</SubTitle>
        <DescriptionWrapper>
          {project.detail_description.map((dsct, index) => (
            <DescriptionParagraph
              description={dsct as Description}
              key={`detail_description(${index})`}
            />
          ))}
        </DescriptionWrapper>
      </section>

      {project.trouble_shooting && (
        <section>
          <SubTitle>트러블 슈팅</SubTitle>
          <DescriptionWrapper>
            {project.trouble_shooting.map((dsct, index) => (
              <DescriptionParagraph
                description={dsct as Description}
                key={`trouble_shooting_(${index})`}
              />
            ))}
          </DescriptionWrapper>
        </section>
      )}

      {project.what_i_learn && (
        <section>
          <SubTitle>배운점</SubTitle>
          <DescriptionWrapper>
            {project.what_i_learn.map((dsct, index) => {
              const description: Description = {
                title: dsct,
              };
              return (
                <DescriptionParagraph
                  description={description}
                  key={`what_i_learn(${index})`}
                />
              );
            })}
          </DescriptionWrapper>
        </section>
      )}
    </>
  );
};

// ProjectImage 컴포넌트
const CommonImageWrapper = styled.div`
  flex: 1;
  height: 300px;
`;

const ImageWrapperForMobile = styled(CommonImageWrapper)`
  width: 100%;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const FullImageWrapper = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(235, 235, 235, 0.5);
  display: ${(props) => (props.$show ? "flex" : "none")};
  z-index: 10;
  cursor: pointer;
  justify-content: center;
`;

const FullImage = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

interface ProjectImageProps {
  src: string;
  isMobile: boolean;
}

const ProjectImage = (props: ProjectImageProps) => {
  const { src } = props;

  const [showImage, setShowImage] = useState(false);
  const { isMobile } = useResponsive();

  const ImageWrapper = isMobile ? ImageWrapperForMobile : CommonImageWrapper;

  return (
    <>
      <ImageWrapper>
        <Image src={src} onClick={() => setShowImage(true)} />
      </ImageWrapper>

      <FullImageWrapper $show={showImage} onClick={() => setShowImage(false)}>
        <FullImage src={src} />
      </FullImageWrapper>
    </>
  );
};

export default ProjectModalContent;
