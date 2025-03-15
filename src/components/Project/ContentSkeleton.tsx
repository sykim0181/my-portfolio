import styled from "styled-components";
import useResponsive from "../../hooks/useResponsive";

const Skeleton = styled.div`
  background-color: white;
  border-radius: 15px;
`;

const ProjectName = styled(Skeleton)`
  height: 2rem;
  width: 100%;
`;

const IntroductionForCommon = styled.div`
  display: flex;
`;

const IntroductionForPC = styled(IntroductionForCommon)`
  flex-direction: row;
  gap: 1rem;
`;

const IntroductionForMobile = styled(IntroductionForCommon)`
  flex-direction: column;
`;

const ProjectImageForCommon = styled(Skeleton)`
  height: 300px;
`;

const ProjectImageForPC = styled(ProjectImageForCommon)`
  flex: 1;
`;

const ProjectImageForMobile = styled(ProjectImageForCommon)`
  width: 100%;
`;

const BriefDescriptionForCommon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const BriefDescriptionForMobile = styled(BriefDescriptionForCommon)`
  margin-top: 1rem;
`;

const ShortDescription = styled(Skeleton)`
  height: 1.5rem;
`;

const BriefDescriptionOthers = styled(Skeleton)`
  height: 5rem;
`;

const Skills = styled(Skeleton)`
  height: 3rem;
  width: 100%;
`;

const SubTitle = styled(Skeleton)`
  height: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const DescriptionWrapper = styled(Skeleton)`
  width: 100%;
  height: 2rem;
`;

const ContentSkeleton = () => {
  const { isTablet } = useResponsive();

  const Introduction = isTablet ? IntroductionForMobile : IntroductionForPC;
  const ProjectImage = isTablet ? ProjectImageForMobile : ProjectImageForPC;
  const BriefDescription = isTablet
    ? BriefDescriptionForMobile
    : BriefDescriptionForCommon;

  return (
    <>
      <ProjectName />
      <Introduction>
        <ProjectImage />
        <BriefDescription>
          <ShortDescription />
          <BriefDescriptionOthers />
        </BriefDescription>
      </Introduction>
      <Skills />

      <div>
        <SubTitle />
        <DescriptionWrapper />
      </div>
    </>
  );
};

export default ContentSkeleton;
