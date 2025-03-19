import styled from "styled-components";
import { Project } from "../../types/commonTypes";
import { useNavigate } from "react-router";
import {
  IoVideocam,
  IoLogoGithub,
  IoOpenOutline,
  IoClose,
} from "react-icons/io5";
import useResponsive from "../../hooks/useResponsive";

const HeaderWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  background-color: white;
  padding: 1rem 2rem;
  align-items: center;
`;

const CommonProjectName = styled.div`
  flex: 1;
`;
const ProjectNameForPC = styled(CommonProjectName)`
  font-size: 1.5rem;
`;
const ProjectNameForMobile = styled(CommonProjectName)`
  font-size: 1.2rem;
`;

const CommonModalButtons = styled.div`
  display: flex;
  gap: 1rem;

  & button,
  & button a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ModalButtonsForPC = styled(CommonModalButtons)`
  & button,
  & button a {
    font-size: 2.3rem;
  }
`;
const ModalButtonsForTablet = styled(CommonModalButtons)`
  & button,
  & button a {
    font-size: 2rem;
  }
`;
const ModalButtonsForMobile = styled(CommonModalButtons)`
  & button,
  & button a {
    font-size: 1.5rem;
  }
`;

interface HeaderProps {
  project?: Project;
}

const ProjectModalHeader = (props: HeaderProps) => {
  const { project } = props;

  const { isMobile, isTablet } = useResponsive();
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(location.pathname, { replace: true });
  };

  const ProjectName = isMobile ? ProjectNameForMobile : ProjectNameForPC;
  const ModalButtons = isMobile
    ? ModalButtonsForMobile
    : isTablet
      ? ModalButtonsForTablet
      : ModalButtonsForPC;

  return (
    <HeaderWrapper>
      <ProjectName>{project?.name}</ProjectName>
      <ModalButtons>
        {project?.github && (
          <button>
            <a href={project.github} target="_blank">
              <IoLogoGithub />
            </a>
          </button>
        )}
        {project?.video_url && (
          <button>
            <a href={project.video_url} target="_blank">
              <IoVideocam />
            </a>
          </button>
        )}
        {project?.deployment && (
          <button>
            <a href={project.deployment} target="_blank">
              <IoOpenOutline />
            </a>
          </button>
        )}
        <button onClick={closeModal}>
          <IoClose />
        </button>
      </ModalButtons>
    </HeaderWrapper>
  );
};

export default ProjectModalHeader;
