import { Moment } from "moment";

export interface ITask {
  id: string;
  date: Date| Moment;
  name: string;
  desc: string;
  isComplete: boolean;
}

export interface INews {
  setup: string;
  punchline: string;
}
export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;
