"use client";

import { RefObject, useRef } from "react";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type CarProps = {
  carRef: RefObject<THREE.Group | null>;
};

export default function Car({ carRef }: CarProps) {
  const { scene } = useGLTF("/models/CAR Model.glb");

  const [, getKeys] = useKeyboardControls();

  const speed = useRef(0);

  useFrame(() => {
    if (!carRef.current) return;

    const keys = getKeys();

    // W = Forward
    if (keys.forward) {
      speed.current -= 0.006;
    }

    // S = Reverse
    if (keys.backward) {
      speed.current += 0.006;
    }

    // Friction
    speed.current *= 0.96;

    // Clamp Speed
    speed.current = THREE.MathUtils.clamp(
  speed.current,
  -0.35,
  0.6
);

    // Steering
    if (Math.abs(speed.current) > 0.001) {
      if (keys.left) {
        carRef.current.rotation.y += 0.03;
      }

      if (keys.right) {
        carRef.current.rotation.y -= 0.03;
      }
    }

    // Move in facing direction
    const direction = new THREE.Vector3(0, 0, -1);

    direction.applyQuaternion(carRef.current.quaternion);

    carRef.current.position.add(
      direction.multiplyScalar(speed.current)
    );
  });

  return (
    <primitive
      ref={carRef}
      object={scene}
      position={[0, 0.05, 0]}
      scale={0.01}
    />
  );
}