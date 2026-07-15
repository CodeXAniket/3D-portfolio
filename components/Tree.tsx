"use client";

import { useGLTF } from "@react-three/drei";

type TreeProps = {
  position: [number, number, number];
  scale?: number;
};

export default function Tree({
  position,
  scale = 1,
}: TreeProps) {
  const { scene } = useGLTF("/models/Big Tree.glb");

  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={scale}
    />
  );
}