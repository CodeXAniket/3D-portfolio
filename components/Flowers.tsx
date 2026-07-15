"use client";

import { useGLTF } from "@react-three/drei";

export default function Flowers() {
const { scene } = useGLTF("/models/Flower Group.glb");

return (
<primitive
object={scene}
position={[-4, 0, -4]}
scale={1}
/>
);
}