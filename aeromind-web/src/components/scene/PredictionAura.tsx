import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGlobeStore } from '../../store/useGlobeStore'

const RISK_PLANES = [
  { lat: 40.7, lon: -74.0, risk: 'high'   as const },
  { lat: 35.7, lon: 139.7, risk: 'medium' as const },
  { lat: 48.9, lon: 2.4,   risk: 'low'    as const },
  { lat: 19.4, lon: -99.1, risk: 'high'   as const },
]

function latLonToVec3(lat: number, lon: number, r: number) {
  const phi   = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  )
}

const RISK_COLOR = { high: '#EF4444', medium: '#F59E0B', low: '#00C896' }

export function PredictionAura() {
  const opacity    = useGlobeStore((s) => s.layerOpacity.prediction)
  const groupRef   = useRef<THREE.Group>(null)
  const ringRefs   = useRef<THREE.Mesh[]>([])

  const positions = useMemo(() =>
    RISK_PLANES.map((p) => latLonToVec3(p.lat, p.lon, 2.08)),
  [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()

    // Sync rotation with globe
    groupRef.current.rotation.y = t * 0.06

    ringRefs.current.forEach((ring, i) => {
      if (!ring) return
      const phase = (t * 0.7 + i * 0.25) % 1
      ring.scale.setScalar(1 + phase * 1.8)
      ;(ring.material as THREE.MeshBasicMaterial).opacity = opacity * (1 - phase) * 0.7
    })
  })

  if (opacity < 0.01) return null

  return (
    <group ref={groupRef}>
      {RISK_PLANES.map((plane, i) => (
        <group key={i} position={positions[i]}>
          {/* Static marker */}
          <mesh>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={RISK_COLOR[plane.risk]} />
          </mesh>
          {/* Expanding ring */}
          <mesh
            ref={(el) => { if (el) ringRefs.current[i] = el }}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <ringGeometry args={[0.04, 0.07, 24]} />
            <meshBasicMaterial
              color={RISK_COLOR[plane.risk]}
              transparent
              opacity={0}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}
