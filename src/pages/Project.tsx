import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useResponsive from "../hooks/useResponsive";
import { getProject } from "../API/supabase";
import { convertToPeriodStr } from "../utils";
import DescriptionParagraph from "../components/Common/DescriptionParagraph";
import { Description } from "../types/commonTypes";
import ContentSkeleton from "../components/Project/ContentSkeleton";

const Wrapper = styled.div`
  padding: 2rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: var(--default-width);
  margin: 0 auto;
`;

const BackButton = styled.button`
  width: fit-content;
  font-size: 2rem;

  &:hover {
    color: var(--primary-color);
  }
`;

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

  & p:nth-of-type(1) {
    font-size: 1.5rem;
  }
`;

const BriefDescriptionForPC = styled(BriefDescriptionForCommon)`
  padding: 1rem;
  flex: 1;
`;

const BriefDescriptionForMobile = styled(BriefDescriptionForCommon)`
  margin-top: 1rem;
`;

const LinkWrapperForCommon = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkWrapperForPC = styled(LinkWrapperForCommon)`
  flex-direction: column;
`;

const Link = styled.a`
  position: relative;
  width: fit-content;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: black;
    transition: width 0.5s;
  }

  &:hover {
    color: var(--primary-color);
  }

  &:hover::after {
    background-color: var(--primary-color);
  }
`;

const Skills = styled.div`
  display: flex;
  column-gap: 1rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
`;

const SkillForCommon = styled.div`
  background-color: #ebebeb;
  color: #f68eab;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;

  &:hover {
    background-color: #333333;
  }
`;

const SkillForMobile = styled(SkillForCommon)`
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

const Project = () => {
  const { id } = useParams();
  if (id === undefined) {
    console.error("Project Id is undefined");
    throw new Error("Page Not Found");
  }

  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const project = await getProject(Number(id));
      return project;
    },
    staleTime: 1000 * 60 * 10,
  });

  const { isMobile } = useResponsive();

  const navigate = useNavigate();

  const Introduction = isMobile ? IntroductionForMobile : IntroductionForPC;
  const Skill = isMobile ? SkillForMobile : SkillForCommon;
  const LinkWrapper = isMobile ? LinkWrapperForCommon : LinkWrapperForPC;
  const BriefDescription = isMobile
    ? BriefDescriptionForMobile
    : BriefDescriptionForPC;

  if (isError) {
    console.error(error.message);

    if (error.message === "No Matching Project") {
      throw new Error("Page Not Found");
    } else {
      throw new Error("Query Failed");
    }
  }

  const Content = () => {
    // return <ContentSkeleton />;

    if (isFetching || data === undefined) {
      return <ContentSkeleton />;
    }
    return (
      <>
        <h1>{data.name}</h1>

        <Introduction>
          <ProjectImage isMobile={isMobile} src={data.image} />
          <BriefDescription>
            <p>{data.short_description}</p>
            <p>{convertToPeriodStr(data.period_start, data.period_end)}</p>
            <p>{data.additional_short_description}</p>

            <LinkWrapper>
              {data.github && (
                <Link target="_blank" href={data.github}>
                  Github
                </Link>
              )}
              {data.deployment && (
                <Link target="_blank" href={data.deployment}>
                  배포
                </Link>
              )}
              {data.video_url && (
                <Link target="_blank" href={data.video_url}>
                  시연 영상
                </Link>
              )}
            </LinkWrapper>
          </BriefDescription>
        </Introduction>

        <Skills>
          {data.skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Skills>

        <section>
          <SubTitle>상세 설명</SubTitle>
          <DescriptionWrapper>
            {data.detail_description.map((dsct, index) => (
              <DescriptionParagraph
                description={dsct as Description}
                key={`detail_description(${index})`}
              />
            ))}
          </DescriptionWrapper>
        </section>

        {data.trouble_shooting && (
          <section>
            <SubTitle>트러블 슈팅</SubTitle>
            <DescriptionWrapper>
              {data.trouble_shooting.map((dsct, index) => (
                <DescriptionParagraph
                  description={dsct as Description}
                  key={`trouble_shooting_(${index})`}
                />
              ))}
            </DescriptionWrapper>
          </section>
        )}

        {data.what_i_learn && (
          <section>
            <SubTitle>배운점</SubTitle>
            <DescriptionWrapper>
              {data.what_i_learn.map((dsct, index) => {
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

  return (
    <Wrapper>
      <BackButton onClick={() => navigate("/")}>
        <IoArrowBackOutline />
      </BackButton>

      <Content />
    </Wrapper>
  );
};

const ImageWrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
`;

const FullImageWrapper = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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

export default Project;
