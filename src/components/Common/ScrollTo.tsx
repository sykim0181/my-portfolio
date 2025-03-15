import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTo = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const parentElement = element.parentElement;
        if (parentElement?.classList.contains("home_section")) {
          parentElement?.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollTo;
