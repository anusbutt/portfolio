"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2, 1, -1]}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#f97316" wireframe opacity={0.6} transparent />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[2, -0.5, -2]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#f97316" wireframe opacity={0.4} transparent />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[0, 2, -3]}>
          <dodecahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#ffffff" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[-1.5, -1.5, -1]}>
          <torusGeometry args={[0.35, 0.12, 8, 16]} />
          <meshStandardMaterial color="#f97316" wireframe opacity={0.5} transparent />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.9}>
        <mesh position={[2.5, 1.5, -2.5]}>
          <coneGeometry args={[0.3, 0.6, 4]} />
          <meshStandardMaterial color="#ffffff" wireframe opacity={0.25} transparent />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#f97316" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#ffffff" />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
