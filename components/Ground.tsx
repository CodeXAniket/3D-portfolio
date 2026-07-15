export default function Ground() {
return (
<mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
<planeGeometry args={[1000,1000]} />
<meshStandardMaterial color="#5a8f3d"/>
</mesh>
);
}