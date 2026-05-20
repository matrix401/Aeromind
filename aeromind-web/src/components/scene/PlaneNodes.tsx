import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGlobeStore } from '../../store/useGlobeStore'

const PLANE_COUNT = 36

// Precomputed orbit params for each plane
function buildOrbits(count: number) {
  return Array.from({ length: count }, () => {
    const speed = 0.04 + Math.random() * 0.08
    const offset = Math.random() * Math.PI * 2
    const axis = new THREE.Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5
    ).normalize()
    return { speed, offset, axis }
  })
}

const ORBITS = buildOrbits(PLANE_COUNT)

export function PlaneNodes() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const trailRef = useRef<THREE.Points>(null)
  const currentSection = useGlobeStore((s) => s.currentSection)

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const quat  = useMemo(() => new THREE.Quaternion(), [])
  const trailPositions = useMemo(() => new Float32Array(PLANE_COUNT * 3), [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    for (let i = 0; i < PLANE_COUNT; i++) {
      const { speed, offset, axis } = ORBITS[i]
      const angle = t * speed + offset

      // Rotate a start position around the orbit axis
      const base = new THREE.Vector3(0, 2.04, 0)
      quat.setFromAxisAngle(axis, angle)
      const pos = base.clone().applyQuaternion(quat)

      dummy.position.copy(pos)
      dummy.lookAt(0, 0, 0)
      dummy.scale.setScalar(currentSection === 2 ? 0.0 : 1.0) // hide when zoomed
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)

      trailPositions[i * 3]     = pos.x
      trailPositions[i * 3 + 1] = pos.y
      trailPositions[i * 3 + 2] = pos.z
    }

    meshRef.current.instanceMatrix.needsUpdate = true

    if (trailRef.current) {
      const geo = trailRef.current.geometry
      geo.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Plane dots */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, PLANE_COUNT]}>
        <boxGeometry args={[0.04, 0.015, 0.07]} />
        <meshBasicMaterial color="#4FC3F7" />
      </instancedMesh>

      {/* Position markers — glowing dots at plane positions */}
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[trailPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00C896"
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.8}
          depthWrite={false}
        />
      </points>
    </group>
  )
}
