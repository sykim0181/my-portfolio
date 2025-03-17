import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import {
  cursorPositionAtom,
  cursorTextAtom,
  CursorType,
  cursorTypeAtom,
} from "../atoms/cursorAtom";
import { Position } from "../types/commonTypes";

const delay = 100;

type TCursor = {
  type: CursorType;
  position: Position;
  text: string;
};

const useCursor = () => {
  const [type, setType] = useState<CursorType>("none");
  const [text, setText] = useState<string>("");
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const [cursorPosition, setCursorPosition] = useAtom(cursorPositionAtom);
  const [cursorType, setCursorType] = useAtom(cursorTypeAtom);
  const cursorText = useAtomValue(cursorTextAtom);
  const ref = useRef<HTMLDivElement>(null); // cursor element

  const cursor = useRef<TCursor>({
    type,
    text,
    position: { x: 0, y: 0 },
  });

  const throttle = useRef<boolean>(false);

  useEffect(() => {
    cursor.current = {
      type,
      text,
      position,
    };
  }, [type, text, position]);

  useEffect(() => {
    const eventHandler = (e: MouseEvent) => {
      if (cursor.current.type === "none") {
        setCursorType("default");
      }

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
      }, 100);
    };

    window.addEventListener("mousemove", eventHandler);

    return () => {
      window.removeEventListener("mousemove", eventHandler);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setType(cursorType);
      setText(cursorText);
      setPosition(cursorPosition);
    }, delay);
  }, [cursorType, cursorText, cursorPosition]);

  return {
    ref,
    x: cursorPosition.x,
    y: cursorPosition.y,
    type,
    text,
  };
};

export default useCursor;
