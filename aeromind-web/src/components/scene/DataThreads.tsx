import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGlobeStore } from '../../store/useGlobeStore'

const THREAD_COUNT = 32

function buildThreadGeometry(count: number) {
  const curves: THREE.CatmullRomCurve3[] = []
  for (let i = 0; i < count; i++) {
    const phi   = Math.acos(2 * Math.random() - 1)
    const theta = Math.random() * Math.PI * 2
    const surface = new THREE.Vector3(
      2.04 * Math.sin(phi) * Math.cos(theta),
      2.04 * Math.cos(phi),
      2.04 * Math.sin(phi) * Math.sin(theta)
    )
    const mid = surface.clone().multiplyScalar(0.5 + Math.random() * 0.3)
    const curve = new THREE.CatmullRomCurve3([
      surface,
      mid,
      new THREE.Vector3(0, 0, 0),
    ])
    curves.push(curve)
  }
  return curves
}

const CURVES = buildThreadGeometry(THREAD_COUNT)

export function DataThreads() {
  const layerOpacity = useGlobeStore((s) => s.layerOpacity)
  const currentSection = useGlobeStore((s) => s.currentSection)
  const groupRef = useRef<THREE.Group>(null)

  const lineData = useMemo(() => {
    return CURVES.map((curve) => {
      const points = curve.getPoints(20)
      const positions = new Float32Array(points.length * 3)
      const alphas = new Float32Array(points.length)

      points.forEach((p, i) => {
        positions[i * 3]     = p.x
        positions[i * 3 + 1] = p.y
        positions[i * 3 + 2] = p.z
        // Fade from surface to center
        alphas[i] = i / (points.length - 1)
      })

      return { positions, alphas, length: points.length }
    })
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()

    groupRef.current.children.forEach((child, i) => {
      const line = child as THREE.Line
      const mat = line.material as THREE.LineBasicMaterial
      // Pulse opacity with phase offset per thread
      const phase = Math.sin(t * 1.2 + i * 0.4) * 0.5 + 0.5
      mat.opacity = layerOpacity.threads * phase
    })
  })

  return (
    <group ref={groupRef}>
      {lineData.map((data, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[data.positions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={currentSection >= 5 ? '#FB923C' : currentSection >= 3 ? '#4FC3F7' : '#00C896'}
            transparent
            opacity={layerOpacity.threads * 0.6}
            depthWrite={false}
          />
        </line>
      ))}
    </group>
  )
}
