"use client";

import { useGLTF } from "@react-three/drei";

type LampProps = {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
};

export default function Lamp({
  position,
  scale = 1,
  rotation = [0, 0, 0],
}: LampProps) {
  const { scene } = useGLTF("/models/lamp post.glb");

  return (
    <primitive
      object={scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}