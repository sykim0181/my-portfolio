import React, { useEffect, useMemo, useRef, JSX } from "react";
import { DivRefProps } from "../types/interface";

interface useScrollHomeProps {
  sections: ((props: DivRefProps) => JSX.Element)[];
}

const useScrollHome = (props: useScrollHomeProps) => {
  const { sections } = props;

  const indexRef = useRef(0);

  const refs: React.RefObject<HTMLDivElement | null>[] = Array.from(
    { length: sections.length },
    () => useRef<HTMLDivElement>(null)
  );

  const Sections = useMemo(
    () =>
      sections.map((Section, index) => (
        <Section ref={refs[index]} key={`section${index}`} />
      )),
    [sections]
  );

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      const prevIndex = indexRef.current;

      const currentSectionRef = refs[prevIndex];
      if (!currentSectionRef.current) {
        return;
      }

      const isAtTop = currentSectionRef.current.scrollTop === 0;
      const isAtBottom =
        Math.abs(
          currentSectionRef.current.scrollHeight -
            currentSectionRef.current.scrollTop -
            currentSectionRef.current.clientHeight
        ) <= 1;

      let curIndex = prevIndex;
      if (isAtTop && e.deltaY < 0 && prevIndex > 0) {
        curIndex = prevIndex - 1;
      } else if (isAtBottom && e.deltaY > 0 && prevIndex < refs.length - 1) {
        curIndex = prevIndex + 1;
      }

      if (prevIndex === curIndex) {
        return;
      }

      e.preventDefault();
      indexRef.current = curIndex;
      const ref = refs[curIndex];
      if (!ref.current) {
        return;
      }
      ref.current.scrollIntoView({ behavior: "smooth" });
    };
    const root = document.getElementById("content-root");
    root?.addEventListener("wheel", handler, { passive: false });

    return () => {
      root?.removeEventListener("wheel", handler);
    };
  }, []);

  return {
    Sections,
  };
};

export default useScrollHome;
