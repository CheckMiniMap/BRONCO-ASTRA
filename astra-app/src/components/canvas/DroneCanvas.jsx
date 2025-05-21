import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Center, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ForceInitialRender = () => {
  const { invalidate } = useThree();
  useEffect(() => {
    invalidate();
  }, []);
  return null;
};


const Drone = ({ droneRef }) => {
  const drone = useGLTF('./model/drone.glb');
  return (
    <primitive
      ref={droneRef}
      object={drone.scene}
      scale={1}
      position={[0, 0, 0]}
    />
  );
};

function DroneCanvas() {
  const droneRef = useRef();
  const canvasWrapperRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (canvasWrapperRef.current) observer.observe(canvasWrapperRef.current);

    return () => {
      if (canvasWrapperRef.current) observer.unobserve(canvasWrapperRef.current);
    };
  }, []);


  return (
    <div ref={canvasWrapperRef} className="h-full">
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 35,
          near: 1.1,
          far: 500,
          position: [50, 15, -10],
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<CanvasLoader />}>
          <Center>
            <Drone droneRef={droneRef} />
          </Center>
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 2.3}
            maxPolarAngle={Math.PI / 2.3}
            autoRotate={isVisible}         // 👈 Animate only when visible
            autoRotateSpeed={2}
          />
          <Preload all />
          <ForceInitialRender />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default DroneCanvas;