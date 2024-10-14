import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from "react";
import { PointMaterial, Points } from "@react-three/drei";
import { random } from "maath";

function Stars(props) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((state, delta) => {
    if (ref.current?.rotation) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export function Home() {
  return (
    <div className="fixed top-0 left-0 v-screen h-screen z-[-1]">
      <Canvas style={{ width: "100vw", height: "100%", background: "#000" }} camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{
          margin: 0,
          padding: 0,
          fontSize: '15em',
          fontWeight: 500,
          letterSpacing: '-0.05em'
        }}>
          welcome
        </h1>
      </div>
    </div>
  );
}
