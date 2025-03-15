import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import {
  cursorPositionAtom,
  cursorTextAtom,
  CursorType,
  cursorTypeAtom,
} from "../atoms/cursorAtom";

const delay = 100;

const useCursor = () => {
  const [type, setType] = useState<CursorType>("default");
  const [text, setText] = useState<string>("");

  const [cursorPosition, setCursorPosition] = useAtom(cursorPositionAtom);
  const cursorType = useAtomValue(cursorTypeAtom);
  const cursorText = useAtomValue(cursorTextAtom);
  const ref = useRef<HTMLDivElement>(null); // cursor

  const throttle = useRef<boolean>(false);

  useEffect(() => {
    const eventHandler = (e: MouseEvent) => {
      if (throttle.current) {
        return;
      }

      throttle.current = true;
      setTimeout(() => {
        const width = ref.current?.getBoundingClientRect().width ?? 0;
        const height = ref.current?.getBoundingClientRect().height ?? 0;
        setCursorPosition({
          x: e.clientX - width / 2,
          y: e.clientY - height / 2,
        });
        throttle.current = false;
      }, delay);
    };

    window.addEventListener("mousemove", eventHandler);

    return () => {
      window.removeEventListener("mousemove", eventHandler);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setType(cursorType);
    }, delay);
  }, [cursorType]);

  useEffect(() => {
    setTimeout(() => {
      setText(cursorText);
    }, delay);
  }, [cursorText]);

  return {
    ref,
    x: cursorPosition.x,
    y: cursorPosition.y,
    type,
    text,
  };
};

export default useCursor;
