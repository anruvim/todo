import { HEX, RGB, RGBA } from "../../libs/interfaces";

function BulletLinePoint({
  color = "#A9A9A9",
}: {
  color?: RGB | RGBA | HEX | string;
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "3px",
        height: "40px",
        width: "5px",
      }}
    />
  );
}

export default BulletLinePoint;
