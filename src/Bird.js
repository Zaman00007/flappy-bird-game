import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Bird = () => {
  const texture = useLoader(TextureLoader, './assets/sprites/bluebird-downflap.png');

  return (
    <mesh position={[0, 0, 0]}>
      {/* Body */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />

      {/* Head */}
      <mesh position={[1.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Wings */}
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Tail */}
      <mesh position={[-0.7, 0, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.5]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </mesh>
  );
};

export default Bird;
