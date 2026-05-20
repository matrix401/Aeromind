import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGlobeStore } from '../../store/useGlobeStore'

const NODE_COUNT = 28

function buildGraph(count: number) {
  const nodes: THREE.Vector3[] = []
  for (let i = 0; i < count; i++) {
    const r   = 1.2 + Math.random() * 0.6
    const phi = Math.acos(2 * Math.random() - 1)
    const th  = Math.random() * Math.PI * 2
    nodes.push(new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(th),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(th)
    ))
  }

  const edges: [number, number][] = []
  for (let i = 0; i < count; i++) {
    const connections = 2 + Math.floor(Math.random() * 2)
    for (let c = 0; c < connections; c++) {
      const j = Math.floor(Math.random() * count)
      if (j !== i) edges.push([i, j])
    }
  }

  return { nodes, edges }
}

const GRAPH = buildGraph(NODE_COUNT)

export function GraphNetwork() {
  const graphOpacity = useGlobeStore((s) => s.layerOpacity.graph)
  const humanOpacity = useGlobeStore((s) => s.layerOpacity.human)
  const groupRef = useRef<THREE.Group>(null)
  const nodesRef = useRef<THREE.Points>(null)

  const { edgePositions, nodePositions } = useMemo(() => {
    const edgePos = new Float32Array(GRAPH.edges.length * 6)
    GRAPH.edges.forEach(([a, b], i) => {
      const na = GRAPH.nodes[a]
      const nb = GRAPH.nodes[b]
      edgePos[i * 6]     = na.x; edgePos[i * 6 + 1] = na.y; edgePos[i * 6 + 2] = na.z
      edgePos[i * 6 + 3] = nb.x; edgePos[i * 6 + 4] = nb.y; edgePos[i * 6 + 5] = nb.z
    })

    const nodePos = new Float32Array(GRAPH.nodes.length * 3)
    GRAPH.nodes.forEach((n, i) => {
      nodePos[i * 3] = n.x; nodePos[i * 3 + 1] = n.y; nodePos[i * 3 + 2] = n.z
    })

    return { edgePositions: edgePos, nodePositions: nodePos }
  }, [])

  const activeOpacity = Math.max(graphOpacity, humanOpacity)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.04
    groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.1
  })

  if (activeOpacity < 0.01) return null

  const edgeColor  = humanOpacity > graphOpacity ? '#FB923C' : '#F59E0B'
  const nodeColor  = humanOpacity > 0.3 ? '#FB923C' : '#F59E0B'

  return (
    <group ref={groupRef}>
      {/* Edges */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={edgeColor}
          transparent
          opacity={activeOpacity * 0.5}
          depthWrite={false}
        />
      </lineSegments>

      {/* Nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={nodeColor}
          size={0.07}
          sizeAttenuation
          transparent
          opacity={activeOpacity * 0.9}
          depthWrite={false}
        />
      </points>
    </group>
  )
}
