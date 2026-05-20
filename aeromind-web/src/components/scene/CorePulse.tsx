import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

export function CorePulse() {
  const innerRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (innerRef.current) {
      const s = 1 + Math.sin(t * 2) * 0.08
      innerRef.current.scale.setScalar(s)
      ;(innerRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.7 + Math.sin(t * 2) * 0.3
    }

    // Rings expand outward and fade
    const rings = [ring1Ref, ring2Ref, ring3Ref]
    rings.forEach((r, idx) => {
      if (!r.current) return
      const phase = (t * 0.5 + idx * 0.33) % 1
      r.current.scale.setScalar(1 + phase * 2.5)
      ;(r.current.material as THREE.MeshBasicMaterial).opacity =
        (1 - phase) * 0.4
    })
  })

  return (
    <group>
      {/* Solid inner core */}
      <Sphere ref={innerRef} args={[0.06, 16, 16]}>
        <meshBasicMaterial color="#00C896" transparent opacity={0.9} />
      </Sphere>

      {/* Expanding pulse rings */}
      {[ring1Ref, ring2Ref, ring3Ref].map((ref, i) => (
        <mesh ref={ref} key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.07, 0.09, 32]} />
          <meshBasicMaterial
            color="#00C896"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Ambient glow sphere */}
      <Sphere args={[0.18, 16, 16]}>
        <meshBasicMaterial
          color="#00C896"
          transparent
          opacity={0.04}
          depthWrite={false}
        />
      </Sphere>
    </group>
  )
}
