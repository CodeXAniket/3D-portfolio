"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  target: React.RefObject<THREE.Group | null>;
};

export default function CameraController({ target }: Props) {
  const { camera } = useThree();

  useFrame(() => {
    if (!target.current) return;

    const car = target.current;

    // Camera behind and above the car
    const offset = new THREE.Vector3(0, 12, -20);

    // Rotate offset with car direction
    offset.applyQuaternion(car.quaternion);

    const desiredPosition = car.position.clone().add(offset);

    // Smooth follow
    camera.position.lerp(desiredPosition, 0.08);

    // Look ahead of the car
    const forward = new THREE.Vector3(0, 0, 30);
    forward.applyQuaternion(car.quaternion);

    const lookAt = car.position.clone().add(forward);
    lookAt.y += 3;

    camera.lookAt(lookAt);
  });

  return null;
}