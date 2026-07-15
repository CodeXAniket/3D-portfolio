"use client";

import { useGLTF } from "@react-three/drei";

type FieldProps = {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
};

export default function Field({
  position,
  scale = 1,
  rotation = [0, 0, 0],
}: FieldProps) {
  const { scene } = useGLTF("/models/Field.glb");

  return (
    <primitive
      object={scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}