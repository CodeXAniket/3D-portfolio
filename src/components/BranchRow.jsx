import ExitLane from "./ExitLane.jsx";

/**
 * One row of the alternating layout: a card on the left or right, and the
 * exit lane that connects it back to the central highway median. On
 * mobile the three-column grid collapses and a small road stud stands in
 * for the exit lane instead.
 */
export default function BranchRow({ side = "left", color = "gold", children }) {
  return (
    <div className="relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_72px_1fr] md:gap-0">
      {/* mobile-only stub connector */}
      <div className="flex justify-center md:hidden" aria-hidden="true">
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: `var(--${color})`, boxShadow: `0 0 8px var(--${color})` }}
        />
      </div>

      <div className="flex justify-center md:justify-end">{side === "left" ? children : null}</div>

      <div className="relative hidden min-h-[1px] md:block">
        <ExitLane side={side} color={color} />
      </div>

      <div className="flex justify-center md:justify-start">{side === "right" ? children : null}</div>
    </div>
  );
}
