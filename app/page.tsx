"use client";

import { KeyboardControls } from "@react-three/drei";
import Scene from "@/components/Scene";

enum Controls {
  forward = "forward",
  backward = "backward",
  left = "left",
  right = "right",
}

const map = [
  { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
  { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
];

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <KeyboardControls map={map}>
        <Scene />
      </KeyboardControls>
    </main>
  );
}