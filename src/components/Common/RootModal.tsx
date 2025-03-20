import { AnimatePresence } from "motion/react";
import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import styled from "styled-components";
import ProjectModal from "../Project/ProjectModal";

const modalTypes = ["project"];

const Wrapper = styled.div<{ $showModal: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: ${(props) => (props.$showModal ? "auto" : "none")};
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(156, 156, 156, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

const RootModal = () => {
  const [searhParams, _] = useSearchParams();
  const modalType = searhParams.get("modal");
  const projectId = searhParams.get("projectId");

  const navigate = useNavigate();
  const location = useLocation();

  const showModal = useMemo(() => {
    if (modalType === null) {
      return false;
    }
    if (!modalTypes.includes(modalType)) {
      return false;
    }
    if (modalType === "project" && projectId === null) {
      return false;
    }
    return true;
  }, [modalType, projectId]);

  const closeModal = () => {
    navigate(location.pathname, { replace: true });
  };

  useEffect(() => {
    const overlay = document.getElementById("modal-overlay");
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
    } 

    if (!showModal) {
      closeModal();
    } else {
      overlay?.addEventListener("wheel", wheelHandler, { passive: false });
    }

    return () => {
      overlay?.removeEventListener("wheel", wheelHandler);
    }
  }, [showModal]);

  const Modal = useMemo(() => {
    switch (modalType) {
      case "project": {
        if (projectId === null) {
          return <></>;
        }
        return <ProjectModal projectId={Number(projectId)} />;
      }
      default: {
        return <></>;
      }
    }
  }, [modalType, projectId]);

  const onClickOutsideModal = () => {
    closeModal();
  };

  return (
    <Wrapper id="modal-root" $showModal={showModal}>
      <AnimatePresence>
        {showModal && (
          <>
            <Overlay id="modal-overlay" onClick={onClickOutsideModal} />
            {Modal}
          </>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default RootModal;
