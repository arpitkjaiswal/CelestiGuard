"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Globe() {
  const [satPos, setSatPos] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/satellite");
      const { lat, lon } = res.data;

      const radius = 2;
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);

      setSatPos({ x, y, z });
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas style={{ width: "70%", background: "black" }}>
      <ambientLight />
      <OrbitControls />
      <Sphere args={[2, 32, 32]}>
        <meshStandardMaterial color="blue" wireframe />
      </Sphere>

      <mesh position={[satPos.x, satPos.y, satPos.z]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
}
