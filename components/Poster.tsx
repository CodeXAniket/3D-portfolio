"use client";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  image: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
};

export default function Poster({
  image,
  position,
  rotation = [0, 0, 0],
  width = 5,
  height = 3,
}: Props) {
  const texture = useTexture(image);

  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial
        map={texture}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}