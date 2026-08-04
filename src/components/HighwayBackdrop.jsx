import { useState } from "react";

/**
 * Sits behind the timeline only (Projects → Extra Curricular), never
 * behind the Hero or Footer. Expects an aerial highway loop at
 * `/public/highway-loop.mp4` (drop your file in `public/` with that
 * name, or pass a different `src`). If the video is missing or fails to
 * load, it falls back to a quiet asphalt-toned gradient so the layout
 * never breaks.
 */
export default function HighwayBackdrop({ src = "/highway-loop.mp4", poster }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* quiet fallback tone, always present underneath */}
      <div className="absolute inset-0 bg-[#0d0d12]" />

      {!failed && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setFailed(true)}
        />
      )}

      {/* fade the video into the plain background at the top and bottom
          edges so it blends seamlessly with the Hero and Footer above
          and below it */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--bg) 0%, transparent 10%, transparent 90%, var(--bg) 100%)",
        }}
      />
      {/* keep overall contrast premium/dark so cards stay fully legible */}
      <div className="absolute inset-0 bg-bg/70" />
    </div>
  );
}
