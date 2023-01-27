import { useState } from "react";
import { HEX } from "../libs/interfaces";

const useGenerateRandomColor = () => {
  const [color, setColor] = useState<HEX>(
    `#${Math.random().toString(16).substr(-6)}`
  );
  const generateColor = () => {
    setColor(`#${Math.random().toString(16).substr(-6)}`);
  };
  return { color, generateColor };
};
export default useGenerateRandomColor;
