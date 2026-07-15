export default function Road() {
return (
<>
<mesh position={[0,0.01,0]} rotation={[-Math.PI/2,0,0]} receiveShadow>
<planeGeometry args={[8,1000]} />
<meshStandardMaterial color="#2c2c2c" />
</mesh>

<mesh position={[0,0.02,0]} rotation={[-Math.PI/2,0,0]}>
<planeGeometry args={[0.15,300]} />
<meshStandardMaterial color="white" />
</mesh>
</>
);
}