import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface GLBViewerProps {
  url: string;
}

const GLBModel = ({ url }: { url: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(url);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return <primitive object={gltf.scene} ref={groupRef} />;
};

useGLTF.preload('/your-model.glb');

export const GLBViewer = ({ url }: GLBViewerProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 50 }} style={{ width: '100%', height: '500px' }}>
      {/* Bright ambient light to fill all shadows */}
      <ambientLight intensity={1.5} />

      {/* Key light from front-top-right */}
      <directionalLight position={[5, 5, 5]} intensity={2} castShadow />

      {/* Fill light from back-bottom-left */}
      <directionalLight position={[-5, -5, -5]} intensity={1.5} />

      {/* Optional helper light from top */}
      <directionalLight position={[0, 10, 0]} intensity={1} />

      <Suspense fallback={null}>
        <GLBModel url={url} />
      </Suspense>

      <OrbitControls enableZoom enablePan />
    </Canvas>
  );
};
