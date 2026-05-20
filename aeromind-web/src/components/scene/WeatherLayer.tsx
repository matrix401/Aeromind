import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useGlobeStore } from '../../store/useGlobeStore'

export function WeatherLayer() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const opacity  = useGlobeStore((s) => s.layerOpacity.weather)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.03
      outerRef.current.rotation.z = t * 0.015
      const mat = outerRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = opacity * 0.18
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.02
      const mat = innerRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = opacity * 0.09
    }
  })

  if (opacity < 0.01) return null

  return (
    <group>
      <Sphere ref={outerRef} args={[2.25, 32, 32]}>
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0}
          wireframe
          depthWrite={false}
        />
      </Sphere>
      <Sphere ref={innerRef} args={[2.18, 24, 16]}>
        <meshBasicMaterial
          color="#4FC3F7"
          transparent
          opacity={0}
          wireframe
          depthWrite={false}
        />
      </Sphere>
    </group>
  )
}
