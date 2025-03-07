import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return {
    isMobile,
  };
};

export default useResponsive;
