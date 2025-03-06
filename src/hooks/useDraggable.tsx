import { useEffect, useRef, useState } from "react";
import { Position } from "../types/commonTypes";

interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
}

const useDraggable = (props: Props) => {
  const { ref } = props;

  const [selected, setSelected] = useState(false);
  const position = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mouseup", windowMouseUpHandler);
    ref.current?.addEventListener("mousedown", mouseDownHandler);

    return () => {
      window.removeEventListener("mouseup", windowMouseUpHandler);
      ref.current?.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [ref.current]);

  useEffect(() => {
    window.addEventListener("mousemove", windowMouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", windowMouseMoveHandler);
    };
  }, [selected, position.current]);

  const mouseDownHandler = () => {
    setSelected(true);
  };

  const windowMouseUpHandler = () => {
    setSelected(false);
  };

  const windowMouseMoveHandler = (e: MouseEvent) => {
    if (selected === false || ref.current === null) {
      return;
    }

    const prevPos = position.current;
    const curX = prevPos.x + e.movementX;
    const curY = prevPos.y + e.movementY;

    ref.current.style.transform = `translate(${curX}px, ${curY}px)`;
    position.current = {
      x: curX,
      y: curY,
    };
  };
};

export default useDraggable;
