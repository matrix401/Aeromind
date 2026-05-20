export const COLORS = {
  navy: '#06101A',
  navy2: '#091524',
  navy3: '#0E1E2E',
  teal: '#00C896',
  teal2: '#009E78',
  amber: '#F59E0B',
  risk: '#EF4444',
  blue: '#4FC3F7',
  text: '#F0F4F8',
  text2: '#8BA3B8',
} as const

export const SECTION_COUNT = 10

export const SECTIONS = [
  { id: 'hero',       label: 'The World Breathes' },
  { id: 'signals',    label: 'The Signals Exist'  },
  { id: 'layer1',     label: 'Layer 1: Telemetry' },
  { id: 'layer2',     label: 'Layer 2: Environment' },
  { id: 'layer3',     label: 'Layer 3: Maintenance' },
  { id: 'layer4',     label: 'Layer 4: Human Factors' },
  { id: 'noise',      label: 'The Noise Problem'  },
  { id: 'mosaic',     label: 'The Mosaic Mind'    },
  { id: 'prediction', label: 'Layer 5: Prediction'},
  { id: 'resolution', label: 'Resolution'         },
] as const

export const LAYER_COLORS = {
  layer1: '#4FC3F7', // ice blue — telemetry
  layer2: '#7C3AED', // violet — weather/environment
  layer3: '#F59E0B', // amber — maintenance/history
  layer4: '#FB923C', // warm orange — human factors
  layer5: '#00C896', // teal — prediction/synthesis
} as const

// Great-circle approximate waypoints for plane orbits (lat/lon in degrees)
export const PLANE_ROUTES = [
  { from: [40.7, -74.0], to: [51.5, -0.1]  }, // NYC → London
  { from: [35.7, 139.7], to: [22.3, 114.2] }, // Tokyo → HK
  { from: [-33.9, 18.4], to: [1.3, 103.8]  }, // Cape Town → Singapore
  { from: [48.9, 2.4],   to: [25.2, 55.3]  }, // Paris → Dubai
  { from: [19.4, -99.1], to: [4.7, -74.1]  }, // Mexico City → Bogotá
  { from: [-23.5, -46.6],to: [-34.6, -58.4]}, // São Paulo → BA
  { from: [55.8, 37.6],  to: [39.9, 116.4] }, // Moscow → Beijing
  { from: [28.6, 77.2],  to: [13.1, 80.3]  }, // Delhi → Chennai
] as const
