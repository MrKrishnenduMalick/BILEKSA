// Lazy-loaded (see Hero.tsx). Only desktop, only when motion is allowed.
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Blob() {
  const g = useRef<THREE.Group>(null)
  useFrame(({ pointer }, d) => {
    if (!g.current) return
    g.current.rotation.y += d * 0.2
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, pointer.y * 0.4, 0.05)
    g.current.position.x = THREE.MathUtils.lerp(g.current.position.x, pointer.x * 0.4, 0.05)
  })
  return (
    <group ref={g}>
      <Float speed={1.5} floatIntensity={1}>
        <mesh><icosahedronGeometry args={[1.5, 24]} /><MeshDistortMaterial color="#7C4DFF" distort={0.45} speed={1.6} roughness={0.15} metalness={0.25} /></mesh>
      </Float>
      <mesh position={[1.9, 1.1, 0.5]}><sphereGeometry args={[0.45, 32, 32]} /><meshStandardMaterial color="#19D3E8" roughness={0.1} metalness={0.3} /></mesh>
      <mesh position={[-1.9, -1.1, 0.3]}><sphereGeometry args={[0.35, 32, 32]} /><meshStandardMaterial color="#FF4FA3" roughness={0.2} /></mesh>
    </group>
  )
}
export default function Hero3D() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={1} />
      <pointLight position={[4, 4, 4]} color="#FF9A4D" intensity={60} />
      <pointLight position={[-4, -2, 3]} color="#3B5BFF" intensity={60} />
      <Blob />
    </Canvas>
  )
}
