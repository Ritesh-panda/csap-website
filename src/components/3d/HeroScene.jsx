import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// --- Animated Globe Mesh ---
function CyberGlobe() {
  const globeRef = useRef();
  const linesRef = useRef();
  const pointsRef = useRef();

  // Create some glowing points (representing CCTV nodes)
  const points = useMemo(() => {
    const arr = [];
    const total = 60;
    for (let i = 0; i < total; i++) {
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);
      arr.push(new THREE.Vector3(x, y, z).multiplyScalar(1.05));
    }
    return arr;
  }, []);

  // Rotation animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.3;
    if (globeRef.current) globeRef.current.rotation.y = t;
    if (pointsRef.current) pointsRef.current.rotation.y = -t * 0.7;
    if (linesRef.current) linesRef.current.rotation.y = t * 1.2;
  });

  return (
    <group>
      {/* Base glowing globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#2563EB"
          emissive="#06B6D4"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.3}
          wireframe
        />
      </mesh>

      {/* Orbiting neon lines */}
      <group ref={linesRef}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh rotation={[Math.PI / 2, 0, (i * Math.PI) / 5]} key={i}>
            <torusGeometry args={[1.1, 0.003, 16, 128]} />
            <meshBasicMaterial color="#8B5CF6" opacity={0.6} transparent />
          </mesh>
        ))}
      </group>

      {/* Glowing points for nodes */}
      <group ref={pointsRef}>
        {points.map((pos, i) => (
          <mesh position={pos} key={i}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshBasicMaterial color="#06B6D4" emissive="#06B6D4" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// --- Scene Wrapper ---
export default function HeroScene() {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#8B5CF6" />
        <pointLight position={[-3, -3, -3]} intensity={0.5} color="#06B6D4" />

        {/* Animated Globe */}
        <CyberGlobe />

        {/* Stars for depth */}
        <Stars radius={10} depth={20} count={4000} factor={4} fade speed={0.6} />

        {/* Orbit Controls (auto rotate) */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
