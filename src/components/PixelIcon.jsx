// tiny 8x8 grid icons, drawn as filled cells on a bitmap so they read as
// unmistakably "pixel art" rather than a generic line icon.
const GRIDS = {
  monitor: [
    "01111110",
    "11111111",
    "11011011",
    "11011011",
    "11111111",
    "10111101",
    "00111100",
    "01111110",
  ],
  pin: [
    "00111000",
    "01111100",
    "11111110",
    "11100111",
    "11111110",
    "01111100",
    "00111000",
    "00010000",
  ],
  eye: [
    "00000000",
    "00111100",
    "01111110",
    "11100111",
    "11100111",
    "01111110",
    "00111100",
    "00000000",
  ],
};

export default function PixelIcon({ type = "monitor", color = "var(--cyan)", size = 72 }) {
  const grid = GRIDS[type] || GRIDS.monitor;
  const cell = size / 8;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      {grid.map((row, y) =>
        row.split("").map((bit, x) =>
          bit === "1" ? (
            <rect
              key={`${x}-${y}`}
              x={x * cell}
              y={y * cell}
              width={cell}
              height={cell}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  );
}
