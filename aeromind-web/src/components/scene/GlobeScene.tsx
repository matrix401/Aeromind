import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { StarField }      from './StarField'
import { GlobeMesh }      from './GlobeMesh'
import { PlaneNodes }     from './PlaneNodes'
import { DataThreads }    from './DataThreads'
import { CorePulse }      from './CorePulse'
import { WeatherLayer }   from './WeatherLayer'
import { GraphNetwork }   from './GraphNetwork'
import { PredictionAura } from './PredictionAura'

export function GlobeScene() {
  return (
    <div id="globe-canvas">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#4FC3F7" />
        <pointLight position={[-8, -5, -8]} intensity={0.3} color="#7C3AED" />
        <pointLight position={[0, 0, 0]} intensity={0.8} color="#00C896" />

        {/* Scene layers */}
        <StarField />
        <GlobeMesh />
        <DataThreads />
        <PlaneNodes />
        <CorePulse />
        <WeatherLayer />
        <GraphNetwork />
        <PredictionAura />

        {/* Subtle orbit controls — dampened so it doesn't fight scroll */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}
