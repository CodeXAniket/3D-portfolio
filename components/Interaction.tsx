"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

type Props = {
  carRef: React.RefObject<THREE.Group | null>;
  position: [number, number, number];
  link: string;
};

export default function Interaction({
  carRef,
  position,
  link,
}: Props) {

  const [show, setShow] = useState(false);

  useFrame(() => {

    if (!carRef.current) return;

    const d = carRef.current.position.distanceTo(
      new THREE.Vector3(...position)
    );

    setShow(d < 16);

  });

  useEffect(() => {

    function press(e: KeyboardEvent){

      if(e.key.toLowerCase()=="e" && show){

        window.open(link, "_blank");

      }

    }

    window.addEventListener("keydown",press);

    return ()=>window.removeEventListener("keydown",press);

  },[show, link]);

  if(!show) return null;

  return (

    <Html
      position={[position[0],position[1]+2,position[2]]}
      center
    >
      <div
        style={{
          background:"black",
          color:"white",
          padding:"8px 16px",
          borderRadius:"10px",
          fontWeight:"bold"
        }}
      >
        Press E
      </div>
    </Html>

  );

}