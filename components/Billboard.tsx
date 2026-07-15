"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

type BillboardProps = {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
};

export default function Billboard({
  position,
  scale = 1,
  rotation = [0, 0, 0],
}: BillboardProps) {
  const { scene } = useGLTF("/models/Billboard.glb");

  const model = useMemo(() => scene.clone(), [scene]);

  return (
    <primitive
      object={model}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}