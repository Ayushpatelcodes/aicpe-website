import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function GridPlane() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.z += delta * 2;

      if (meshRef.current.position.z > 5) {
        meshRef.current.position.z = 0;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2.2, 0, 0]}
      position={[0, -2, 0]}
    >
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial
        wireframe
        color="#00ffff"
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function GlowLine() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <boxGeometry args={[0.05, 5, 0.05]} />
      <meshBasicMaterial color="#facc15" />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
        
        {/* DARK BACKGROUND */}
        <color attach="background" args={["#020617"]} />

        {/* LIGHT */}
        <ambientLight intensity={0.5} />

        {/* GRID */}
        <GridPlane />

        {/* EXTRA GLOW LINE */}
        <GlowLine />

      </Canvas>
    </div>
  );
}