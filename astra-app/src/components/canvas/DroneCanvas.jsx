import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Center, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';

const Drone = ({ droneRef }) => {
  const drone = useGLTF('./model/drone.glb');

  return (
    <primitive
      ref={droneRef}
      object={drone.scene}
      scale={1}
      position={[0, 0, 0]} // keep it at center
    />
  );
};

function Controls() {
  const controlsRef = useRef();
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controlsRef.current = controls;

    // Focus the camera on the center of the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    controls.target.copy(center);
    controls.update();

    // Lock vertical orbit range
    controls.minPolarAngle = Math.PI / 2.3;
    controls.maxPolarAngle = Math.PI / 2.3;

    // Disable zoom and pan
    controls.enableZoom = true;
    controls.enablePan = false;

    // ✅ Enable auto-rotation
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0; // Adjust for faster/slower spin

    return () => {
      controls.dispose();
    };
  }, [camera, gl, scene]);

  useFrame(() => {
    controlsRef.current?.update();
  });

  return null;
}

function DroneCanvas() {
  const droneRef = useRef();

  return (
    <Canvas
      shadows
      frameloop='always'
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
      <Center>
        <Drone />
        {/* <Suspense fallback={<CanvasLoader />}>
          <Drone droneRef={droneRef} />
          <Preload all />
       </Suspense> */}
      </Center>
      <Controls />
    </Canvas>
  );
}

export default DroneCanvas;