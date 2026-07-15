"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Sky } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Interaction from "./Interaction";
import Ground from "./Ground";
import Car from "./Car";
import Road from "./Road";
import Tree from "./Tree";
import Lamp from "./Lamp";
import Billboard from "./Billboard";
import Field from "./Field";
import CameraController from "./CameraController";
import Poster from "./Poster";

export default function Scene() {
  const carRef = useRef<THREE.Group>(null);

  return (
    <Canvas
      shadows
      camera={{
        position: [0, 8, 18],
        fov: 50,
      }}
    >
      {/* Sky */}
      <Sky
        distance={450000}
        sunPosition={[100, 30, 100]}
        turbidity={8}
        rayleigh={3}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />

      {/* Lighting / Reflections */}
      <Environment preset="sunset" background={false} />

      <ambientLight intensity={1.2} />

      <directionalLight
        castShadow
        position={[40, 50, 20]}
        intensity={2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Ground />

      <Road />

      <Car carRef={carRef} />

      <CameraController target={carRef} />

      {/* Trees */}

<Tree position={[-10,3.5,5.5]} scale={3.2} />
<Tree position={[10,3.5,4.9]} scale={2.9} />

<Tree position={[-10,3.5,13.4]} scale={3.3} />
<Tree position={[10,3.5,15.6]} scale={3.7} />

<Tree position={[-10,3.5,28.5]} scale={2.1} />
<Tree position={[10,3.5,30.8]} scale={2.5} />

<Tree position={[-10,3.5,43.5]} scale={3.0} />
<Tree position={[10,3.5,45.8]} scale={2.8} />

<Tree position={[-10,3.5,58.5]} scale={3.4} />
<Tree position={[10,3.5,60.5]} scale={3.1} />

<Tree position={[-10,3.5,73.5]} scale={2.6} />
<Tree position={[10,3.5,75.8]} scale={3.5} />

<Tree position={[-10,3.5,88.5]} scale={3.3} />
<Tree position={[10,3.5,90.4]} scale={2.7} />

<Tree position={[-10,3.5,103.5]} scale={2.9} />
<Tree position={[10,3.5,105.7]} scale={3.2} />

<Tree position={[-10,3.5,118.5]} scale={3.5} />
<Tree position={[10,3.5,120.6]} scale={2.8} />

<Tree position={[-10,3.5,133.5]} scale={3.1} />
<Tree position={[10,3.5,135.8]} scale={3.4} />

<Tree position={[-10,3.5,148.5]} scale={2.7} />
<Tree position={[10,3.5,150.5]} scale={3.3} />
<Billboard position={[12,5,18]} scale={6}/>
<Interaction
  carRef={carRef}
  position={[12,5,18]}
  link="https://catalog-education.oracle.com/ords/certview/sharebadge?id=320ADDE2870C968180188265DC073F2A3CB81F6D1F7AF9C44F2C8BB6D37616DF"
/>

<Billboard position={[-12,5,42]} scale={6}/>
<Interaction
  carRef={carRef}
  position={[-12,5,42]}
  link="https://www.credly.com/badges/d087f64f-d3d0-4224-8e69-5323a6f81119"
/>

<Billboard position={[12,5,66]} scale={6}/>
<Interaction
  carRef={carRef}
  position={[12,5,66]}
  link="https://github.com/CodeXAniket/Uniqueue-Queue-Management-using-Tokenisation"
/>

<Billboard position={[-12,5,90]} scale={6}/>
<Interaction
  carRef={carRef}
  position={[-12,5,90]}
  link="https://github.com/CodeXAniket/Yolo_2026"
/>

<Billboard position={[12,5,114]} scale={6}/>
<Interaction
  carRef={carRef}
  position={[12,5,114]}
  link="https://github.com/CodeXAniket/Nearest_Essentials_finder"
/>

<Billboard position={[-12,5,138]} scale={6}/>
<Interaction
  carRef={carRef}
  position={[-12,5,138]}
  link="https://drive.google.com/drive/folders/1ZCQtQMo814VWwUNjSzNPtkZXy_jgVeFT?usp=sharing"
/>

      {/* Lamps */}

<Lamp position={[-4,0,10]} scale={0.3}/>
<Lamp position={[4,0,10]} scale={0.3}/>

<Lamp position={[-4,0,30]} scale={0.3}/>
<Lamp position={[4,0,30]} scale={0.3}/>

<Lamp position={[-4,0,50]} scale={0.3}/>
<Lamp position={[4,0,50]} scale={0.3}/>

<Lamp position={[-4,0,70]} scale={0.3}/>
<Lamp position={[4,0,70]} scale={0.3}/>

<Lamp position={[-4,0,90]} scale={0.3}/>
<Lamp position={[4,0,90]} scale={0.3}/>

<Lamp position={[-4,0,110]} scale={0.3}/>
<Lamp position={[4,0,110]} scale={0.3}/>

<Lamp position={[-4,0,130]} scale={0.3}/>
<Lamp position={[4,0,130]} scale={0.3}/>

<Lamp position={[-4,0,150]} scale={0.3}/>
<Lamp position={[4,0,150]} scale={0.3}/>

   
{/* Left */}
<Field position={[-22,0,20]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,27]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,34]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,41]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,48]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,55]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,62]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,69]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,76]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,83]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,90]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,97]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,104]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,111]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,118]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,125]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,132]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,139]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[-22,0,146]} scale={0.045} rotation={[0,Math.PI/2,0]} />

{/* Right */}
<Field position={[22,0,20]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,27]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,34]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,41]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,48]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,55]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,62]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,69]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,76]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,83]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,90]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,97]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,104]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,111]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,118]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,125]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,132]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,139]} scale={0.045} rotation={[0,Math.PI/2,0]} />
<Field position={[22,0,146]} scale={0.045} rotation={[0,Math.PI/2,0]} />




    </Canvas>
  );
}