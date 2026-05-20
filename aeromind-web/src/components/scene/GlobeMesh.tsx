import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useGlobeStore } from '../../store/useGlobeStore'

export function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const currentSection = useGlobeStore((s) => s.currentSection)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!meshRef.current || !wireRef.current || !glowRef.current) return

    // Slow auto-rotation
    meshRef.current.rotation.y = t * 0.06
    wireRef.current.rotation.y = t * 0.06

    // Breathe slightly
    const breathe = 1 + Math.sin(t * 0.4) * 0.008
    meshRef.current.scale.setScalar(breathe)
    wireRef.current.scale.setScalar(breathe)

    // Opacity changes by section
    const targetOpacity = currentSection >= 7 ? 0.55 : currentSection >= 2 ? 0.38 : 0.52
    const mat = meshRef.current.material as THREE.MeshStandardMaterial
    mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.03)

    const wireMat = wireRef.current.material as THREE.MeshBasicMaterial
    const wireTarget = currentSection >= 1 ? 0.18 : 0.09
    wireMat.opacity = THREE.MathUtils.lerp(wireMat.opacity, wireTarget, 0.03)

    // Glow pulse
    const glowMat = glowRef.current.material as THREE.MeshBasicMaterial
    glowMat.opacity = 0.04 + Math.sin(t * 0.8) * 0.02
  })

  return (
    <group>
      {/* Outer atmosphere glow */}
      <Sphere ref={glowRef} args={[2.12, 32, 32]}>
        <meshBasicMaterial
          color="#00C896"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </Sphere>

      {/* Main globe sphere */}
      <Sphere ref={meshRef} args={[2.0, 64, 64]}>
        <meshStandardMaterial
          color="#0E1E2E"
          emissive="#091524"
          emissiveIntensity={0.4}
          roughness={0.85}
          metalness={0.1}
          transparent
          opacity={0.52}
          wireframe={false}
        />
      </Sphere>

      {/* Wireframe overlay — geographic grid feel */}
      <Sphere ref={wireRef} args={[2.01, 24, 24]}>
        <meshBasicMaterial
          color="#00C896"
          transparent
          opacity={0.09}
          wireframe
          depthWrite={false}
        />
      </Sphere>
    </group>
  )
}
