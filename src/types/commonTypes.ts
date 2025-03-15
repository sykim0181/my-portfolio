import { Tables } from "./supabase";

export type Position = {
  x: number;
  y: number;
};

export type Project = Tables<"Project">;

export type Description = {
  title: string;
  content?: string[];
};
