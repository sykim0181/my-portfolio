import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ProjectErrorComponent from "./ProjectErrorComponent";

const ProjectErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={() => reset()}
      FallbackComponent={ProjectErrorComponent}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ProjectErrorBoundary;
