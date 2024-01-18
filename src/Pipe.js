import React from 'react';

const Pipe = () => {
  return (
    <mesh>
      {/* Define your pipe model here */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#00ff00'} />
    </mesh>
  );
};

export default Pipe;
