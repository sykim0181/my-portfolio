import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

interface RootErrorBoundaryProps {
  children: React.ReactNode;
}

const RootErrorBoundary = ({ children }: RootErrorBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();

  const onError = (error: Error) => {
    console.log(error);
  };

  return (
    <ErrorBoundary
      onReset={() => reset()}
      FallbackComponent={ErrorComponent}
      onError={onError}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RootErrorBoundary;
