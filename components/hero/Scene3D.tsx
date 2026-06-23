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
      {/* 1 — Icosahedron (orange, emissive glow) */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2.5, 1.2, -1]}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.4}
            wireframe
            opacity={0.85}
            transparent
          />
        </mesh>
      </Float>

      {/* 2 — Octahedron (orange, emissive glow) */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[2.2, -0.8, -2]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.3}
            wireframe
            opacity={0.7}
            transparent
          />
        </mesh>
      </Float>

      {/* 3 — Dodecahedron (white) */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[0.2, 2.2, -3]}>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.15}
            wireframe
            opacity={0.55}
            transparent
          />
        </mesh>
      </Float>

      {/* 4 — Torus (orange) */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[-1.8, -1.8, -1]}>
          <torusGeometry args={[0.45, 0.15, 8, 16]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.25}
            wireframe
            opacity={0.7}
            transparent
          />
        </mesh>
      </Float>

      {/* 5 — Cone (white) */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.9}>
        <mesh position={[2.8, 1.8, -2.5]}>
          <coneGeometry args={[0.35, 0.7, 4]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.1}
            wireframe
            opacity={0.5}
            transparent
          />
        </mesh>
      </Float>

      {/* 6 — TorusKnot (orange, emissive glow) — top right */}
      <Float speed={1.3} rotationIntensity={0.7} floatIntensity={0.7}>
        <mesh position={[3, 2.5, -3.5]}>
          <torusKnotGeometry args={[0.3, 0.08, 64, 8, 2, 3]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.35}
            wireframe
            opacity={0.65}
            transparent
          />
        </mesh>
      </Float>

      {/* 7 — Tetrahedron (grey) — bottom left */}
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.1}>
        <mesh position={[-3, -2.2, -2]}>
          <tetrahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#444444"
            emissive="#444444"
            emissiveIntensity={0.1}
            wireframe
            opacity={0.5}
            transparent
          />
        </mesh>
      </Float>

      {/* 8 — Box (grey) — bottom right */}
      <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[1.5, -2.5, -2.5]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial
            color="#444444"
            emissive="#444444"
            emissiveIntensity={0.1}
            wireframe
            opacity={0.45}
            transparent
          />
        </mesh>
      </Float>

      {/* 9 — Octahedron (grey) — top left */}
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh position={[-2.8, 2.5, -2.8]}>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color="#444444"
            emissive="#444444"
            emissiveIntensity={0.08}
            wireframe
            opacity={0.4}
            transparent
          />
        </mesh>
      </Float>

      {/* 10 — Cone (orange) — bottom center */}
      <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1}>
        <mesh position={[0.5, -3, -1.8]}>
          <coneGeometry args={[0.25, 0.55, 6]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.2}
            wireframe
            opacity={0.6}
            transparent
          />
        </mesh>
      </Float>

      {/* 11 — TorusKnot (white) — left center */}
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh position={[-3.5, 0, -2.5]}>
          <torusKnotGeometry args={[0.25, 0.07, 64, 8, 3, 5]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.12}
            wireframe
            opacity={0.45}
            transparent
          />
        </mesh>
      </Float>

      {/* 12 — Dodecahedron (orange) — right center */}
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={1.3}>
        <mesh position={[3.2, -0.2, -1.5]}>
          <dodecahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.3}
            wireframe
            opacity={0.65}
            transparent
          />
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
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#f97316" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[0, 0, 8]} intensity={0.3} color="#f97316" />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
