import { atom } from "jotai";
import { Position } from "../types/commonTypes";

export type CursorType = "default" | "project";

export const cursorPositionAtom = atom<Position>({
  x: 0,
  y: 0,
});

export const cursorTypeAtom = atom<CursorType>("default");

export const cursorTextAtom = atom<string>("");
