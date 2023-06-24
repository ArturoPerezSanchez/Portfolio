import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <group>
        <mesh castShadow receiveShadow scale={2.75}>
          <dodecahedronGeometry args={[1, 1]} />
          {/* <meshNormalMaterial/> */}
          <meshLambertMaterial
            color={props.color}
            flatShading
            transparent // Set material to be transparent
            opacity={0.75} // Adjust opacity value (0.0 to 1.0) for translucency
          />
        <Decal
            map={decal}
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
          />
        <Decal
            map={decal}
            position={[0, 0, -1]}
            rotation={[0, - Math.PI, 6.25]}
          />
        </mesh>
      </group>
    </Float>
  );
};

const BallCanvas = ({ color, icon }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball color={color} imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
