import { create } from 'zustand'

export type GlobeState =
  | 'hero'
  | 'signals'
  | 'layer1'
  | 'layer2'
  | 'layer3'
  | 'layer4'
  | 'noise'
  | 'mosaic'
  | 'prediction'
  | 'resolution'

interface GlobeStore {
  currentSection: number
  globeState: GlobeState
  morphProgress: number   // 0-1 transition progress between states
  layerOpacity: {
    threads: number
    weather: number
    graph: number
    human: number
    prediction: number
  }
  setSection: (index: number) => void
  setMorphProgress: (p: number) => void
  setLayerOpacity: (key: keyof GlobeStore['layerOpacity'], val: number) => void
}

const STATE_MAP: GlobeState[] = [
  'hero', 'signals', 'layer1', 'layer2', 'layer3',
  'layer4', 'noise', 'mosaic', 'prediction', 'resolution',
]

export const useGlobeStore = create<GlobeStore>((set) => ({
  currentSection: 0,
  globeState: 'hero',
  morphProgress: 0,
  layerOpacity: {
    threads: 0.4,
    weather: 0,
    graph: 0,
    human: 0,
    prediction: 0,
  },

  setSection: (index) =>
    set({
      currentSection: index,
      globeState: STATE_MAP[Math.min(index, STATE_MAP.length - 1)],
    }),

  setMorphProgress: (p) => set({ morphProgress: p }),

  setLayerOpacity: (key, val) =>
    set((s) => ({ layerOpacity: { ...s.layerOpacity, [key]: val } })),
}))
