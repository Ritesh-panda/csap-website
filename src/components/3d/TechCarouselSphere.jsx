import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";

// ✅ Import SVGs directly from src/assets (Vite-compatible)
import rust from "../../assets/logos/rust.svg";
import go from "../../assets/logos/go.svg";
import python from "../../assets/logos/python.svg";
import docker from "../../assets/logos/docker.svg";
import kubernetes from "../../assets/logos/kubernetes.svg";
import hyperledger from "../../assets/logos/hyperledger.svg";
import crystals from "../../assets/logos/crystals.svg";
import mongodb from "../../assets/logos/mongodb.svg";
import postgresql from "../../assets/logos/postgres.svg";
import reactLogo from "../../assets/logos/react.svg";
import threejs from "../../assets/logos/threejs.svg";

const svgLogos = [
  rust,
  go,
  python,
  docker,
  kubernetes,
  hyperledger,
  crystals,
  mongodb,
  postgresql,
  reactLogo,
  threejs,
];

// ✅ Each logo is flattened, properly aligned, same scale
function StaticLogo({ paths, position }) {
  return (
    <group position={position} rotation={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
      {paths.map((path, i) => {
        const shapes = path.toShapes(true);
        return shapes.map((shape, j) => (
          <mesh key={`${i}-${j}`}>
            <shapeGeometry args={[shape]} />
            <meshStandardMaterial
              color={path.userData?.style?.fill || "#222222"}
              side={THREE.DoubleSide}
              roughness={0.4}
              metalness={0.2}
            />
          </mesh>
        ));
      })}
    </group>
  );
}

function StaticLogosRow() {
  const logos = svgLogos.map((url) => useLoader(SVGLoader, url));
  const spacing = 1.3;
  const start = -(logos.length - 1) * (spacing / 2);

  return (
    <group position={[0, 0, 0]}>
      {logos.map((paths, i) => (
        <StaticLogo key={i} paths={paths.paths} position={[start + i * spacing * 2, 0, 0]} />
      ))}
    </group>
  );
}

export default function TechCarouselSphere() {
  return (
    <div className="w-full h-[260px] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 40 }}
        gl={{ antialias: true }}
      >
        {/* 💡 Balanced Lighting */}
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, 5]} intensity={0.6} />

        {/* 🧩 Ground plane (soft background for contrast) */}
        <mesh position={[0, -1.5, -3]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>

        {/* 🧱 Static Row of Centered Logos */}
        <Suspense fallback={null}>
          <StaticLogosRow />
        </Suspense>
      </Canvas>
    </div>
  );
}
